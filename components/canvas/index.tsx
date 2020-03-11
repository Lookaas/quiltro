/** @jsx jsx */
import { Card, Elevation } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import { KonvaEventObject } from 'konva/types/Node';
import Konva from 'konva'
import React, { Component, createRef, RefObject } from 'react';
import { Layer, Stage, Text, Label, Tag, Rect, Line, Group } from 'react-konva';
import { css } from '@emotion/core';

import { ICanvasTexts, ITextBlockElement, IAdoptionForm } from '../../pages';
import BackgroundImage from './BackgroundImage';
import EditTextArea from './TextArea';
import CanvasText from './Text';
import TransformerComponent from './Transformer';
import CharacteristicsLayer, { ICharacteristicElement } from './CharacteristicsLayer';
import ContactLayer from './ContactLayer';

interface IAppProps {
  onRef: RefObject<any>;
  canvasRef: RefObject<any>;
  onTextBlockSelected: (arg1: string) => void;
  image: HTMLImageElement | null;
  canvasTexts: ICanvasTexts;
  onTextChanged: (arg1: string, arg2: string) => void;
  currentCanvasText: ITextBlockElement;
  canvasHeight: number;
  canvasWidth: number;
  characteristics: {
    [priority: string] : ICharacteristicElement
  },
  formData: IAdoptionForm;
  imageFormat: string;
  color: string;
  secundaryColor: string;
  textColor: string;
}

interface IAppState {
  showEditTextArea: boolean;
  backgroundImage: HTMLImageElement | null;
  editTextAreaProps: any;
  onTextAreaClosed: () => void;
  targetToRestore: any[];
  editTextAreaValue: string;
}
class Canvas extends Component<IAppProps, IAppState> {
  state = {
    backgroundImage: null,
    editTextAreaProps: {},
    editTextAreaValue: '',
    onTextAreaClosed: () => null,
    showEditTextArea: false,
    targetToRestore: []
  };

  transformerRef = createRef<any>();

  resizeImageHeight = (img: HTMLImageElement, newHeight: number, newWidth: number): Promise<HTMLImageElement> => {
    const canvas = document.createElement('canvas');
    canvas.height = newHeight;
    canvas.width = newWidth;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return Promise.resolve(img);
    }
    return new Promise((resolve, reject) => {
      ctx.drawImage(img, 0, 0);
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      const dataurl = canvas.toDataURL('image/png');

      const newImage = new Image();
      newImage.src = dataurl;
      newImage.addEventListener('load', () => {
        resolve(newImage);
      });
      newImage.addEventListener('error', () => {
        reject(img);
      });
    });
  };

  getResizedImage = (image: HTMLImageElement) => {
    const { height, width } = image;
    const { canvasHeight, canvasWidth } = this.props;
    let imageHeight = height;
    let imageWidth = width;
    // Resize to go over the canvas height
    imageWidth = imageWidth * (canvasHeight / imageHeight);
    imageHeight = canvasHeight;

    // Resize to go over the canvas width
    if (canvasWidth > imageWidth) {
      imageHeight = imageHeight * (canvasWidth / imageWidth);
      imageWidth = canvasWidth;
    }
    return this.resizeImageHeight(image, imageHeight, imageWidth);
  };

  async componentDidUpdate(prevProps: any) {
    const { image } = this.props;
    if (image && image !== prevProps.image) {
      const backgroundImage = await this.getResizedImage(image);
      this.setState({ backgroundImage });
    }
  }

  onTextClick = (e:Konva.KonvaEventObject<MouseEvent>): void => {
    e.cancelBubble = true;
    const selectedTextBlock = e.target.name();
    this.props.onTextBlockSelected(selectedTextBlock);
  };

  handleStageMouseDown = (e: Konva.KonvaEventObject<MouseEvent>) => {
    const showEditTextArea = false;
    let selectedTextBlock = '';
    const { currentTarget } = e;
    const { targetToRestore } = this.state;
    const { onTextBlockSelected } = this.props;
    /*const clickedOnStage = target === currentTarget.getStage();
    //const clickedOnTransformer =
    //  target.getParent() && target.getParent().className === 'Transformer';
    //const hasNoName = Boolean(target.name()); // If the thing we are clicking has no name
    const isTextNode = typeof e.currentTarget.stat === 'function'; // TODO: maybe remove this?
    if (isTextNode) {
      selectedTextBlock = e.target.name;
    }*/

    if (targetToRestore) {
      targetToRestore.forEach((el: any) => {
        const canvasRef = this.props.canvasRef.current!;
        el.show();
        canvasRef.draw();
      });
    }

    this.setState(
      {
        showEditTextArea
      },
      () => onTextBlockSelected(selectedTextBlock)
    );
  };

  showElements = (currentTarget: any) => () => {
    this.setState(
      {
        showEditTextArea: false
      },
      () => {
        currentTarget.hide();
        const transformerRef = this.transformerRef.current!;
        const canvasRef = this.props.canvasRef.current!;
        currentTarget.show();
        transformerRef.show();
        canvasRef.draw();
      }
    );
  };

  hideElements = (currentTarget: any) => {
    currentTarget.hide();
    const transformerRef = this.transformerRef.current!;
    const canvasRef = this.props.canvasRef.current!;
    currentTarget.hide();
    transformerRef.hide();
    canvasRef.draw();
  };

  onMouseDown = (evt: KonvaEventObject<MouseEvent>): void => {
    const { onTextBlockSelected } = this.props;
    evt.cancelBubble = true;
    const currentTarget: any = evt.target;
    const { id } = currentTarget.attrs;
    onTextBlockSelected(id);
  };

  onDoubleClick = (evt: KonvaEventObject<MouseEvent>): void => {
    const currentTarget: any = evt.currentTarget;
    const transformerRef = this.transformerRef.current!;
    const canvasRef = this.props.canvasRef.current!;
    this.hideElements(currentTarget);

    // We will create a textarea absolutely positioned over the canvas
    // And we will render it on a portal
    // first we need to find position for textarea

    // At first lets find position of text node relative to the stage:
    const { x, y } = currentTarget.absolutePosition();
    const { left, top } = canvasRef.container().getBoundingClientRect();

    // so position of textarea will be the sum of positions above:
    const areaPosition = {
      x: left + x,
      y: top + y
    };

    // Create textarea styles to match text on canvas as close as possible
    // (Text rendering on canvas and on the textarea can be different
    // and sometimes it is hard to make it 100% the same)
    const targetToRestore = [currentTarget, transformerRef];
    const showEditTextArea = true;
    const editTextAreaValue = currentTarget.text();
    const editTextAreaProps = {
      color: currentTarget.fill() + '',
      fontFamily: currentTarget.fontFamily() + '',
      fontSize: currentTarget.fontSize() + 'px',
      height: currentTarget.height() + 'px',
      left: areaPosition.x + 'px',
      lineHeight: currentTarget.lineHeight() + '',
      padding: currentTarget.padding() + 'px',
      textAlign: currentTarget.align() + '',
      top: areaPosition.y + 'px',
      transformOrigin: 'left top',
      width: currentTarget.width() + 5 + 'px'
    };

    const onTextAreaClosed = this.showElements(currentTarget);

    this.setState({
      editTextAreaProps,
      editTextAreaValue,
      onTextAreaClosed,
      showEditTextArea,
      targetToRestore
    });
  };

  onMount = (ref : RefObject<any>) => {
    this.transformerRef = ref;
  };

  render() {
    const {
      backgroundImage,
      showEditTextArea,
      editTextAreaProps,
      onTextAreaClosed
    } = this.state;
    const { canvasTexts, onRef, onTextChanged, canvasHeight, canvasWidth, characteristics, formData, imageFormat, color, secundaryColor, textColor } = this.props;
    const { textBlocks, selectedTextBlock } = canvasTexts;
    const canvasStyle = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem;
      justify-content: center;
      & .konvajs-content {
        background-color: ${color};
        border: solid 1px lightgray;
      }
    `;
    let yLabels = 0;
    let yLines = canvasHeight*0.71;
    let textX = 0, textY=0, textWidth=canvasWidth;
    if (imageFormat === 'cuadrada') {
      yLabels = 0.43*canvasHeight;
      yLines = canvasHeight*0.65;
    }
    else if (imageFormat === 'horizontal') {
      textX = canvasWidth*0.5;
      textWidth = canvasWidth*0.5;
      yLines = canvasHeight*0.22;
    }
    return (
      <Card elevation={Elevation.ONE} css={canvasStyle}>
        {process.browser && (
          <Stage
            ref={onRef}
            width={canvasWidth}
            height={canvasHeight}
            onClick={this.handleStageMouseDown}
          >
            <Layer>
              <Rect width={canvasWidth} height={canvasHeight} fill={color} />
            </Layer>
            <BackgroundImage backgroundImage={backgroundImage} canvasHeight={canvasHeight} canvasWidth={canvasWidth} imageFormat={imageFormat} rectColor={textColor} />
            <Layer  >
            <Group x={textX} y={textY} width={textWidth} height={canvasHeight} >
              <Group y={yLabels}>
              <Label
              x={0}
              y={canvasHeight*0.05}
              >
              <Tag fill={color} />
              <Text
              fill={textColor}
              padding={10}
              fontSize={35}
              text={formData['nombre-mascota'] !== '' ? formData['nombre-mascota'] : 'Nombre mascota'}
              align={'center'}
              width={textWidth}
              fontStyle={'bold'}
              // _useStrictMode
              />
            </Label>
            <Label
              x={0}
              y={canvasHeight*0.15}
              >
              <Tag fill={color} />
              <Text
              fill={textColor}
              padding={10}
              fontSize={22}
              text={formData['caso-mascota'] !== '' ? (formData['caso-mascota'] === '1' ? "En adopción" : 'Perdido') : 'Caso mascota'}
              align={'center'}
              width={textWidth}
              // _useStrictMode
              />
            </Label>
              </Group>
              <Group y={yLines}>
                <Rect x={0} y={0} width={textWidth} height={3} fill={textColor} />
                <Rect x={0} y={6} width={textWidth} height={6} fill={textColor} />
                <Rect x={0} y={15} width={textWidth} height={3} fill={textColor} />
              </Group>

              <CharacteristicsLayer canvasHeight={canvasHeight} canvasWidth={textWidth} characteristics={characteristics} color={color} textColor={textColor} />

              <ContactLayer canvasHeight={canvasHeight} canvasWidth={textWidth} formData={formData} color={color} textColor={textColor} />

              <Label
              y={canvasHeight*0.95} >
                <Tag fill={secundaryColor} />
                <Text
                fill={textColor}
                  padding={10}
                  width={textWidth}
                  text='difunde.quiltroschile.cl'
                  fontSize={12}
                  align='center' />
              </Label>
              </Group>

              {/*<TransformerComponent
                resizeEnabled
                rotateEnabled={true}
                borderEnabled
                onMount={this.onMount}
                selectedShapeName={selectedTextBlock}
              />*/}
            </Layer>
          </Stage>
        )}
        {/*showEditTextArea && textBlocks[selectedTextBlock].text && (
          <EditTextArea
            onTextAreaClosed={onTextAreaClosed}
            onTextAreaChanged={onTextChanged}
            selectedtextblockid={selectedTextBlock}
            value={textBlocks[selectedTextBlock].text}
            style={editTextAreaProps}
            maxWidth={canvasWidth}
            maxHeight={canvasHeight}
          />
        )*/}
      </Card>
    );
  }
}

export default Canvas;
