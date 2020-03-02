/** @jsx jsx */
import { Card, Elevation } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import { KonvaEventObject } from 'konva/types/Node';
import Konva from 'konva'
import React, { Component, createRef, RefObject } from 'react';
import { Layer, Stage, Text, Group } from 'react-konva';
import { Image as ImageKonva } from 'react-konva';

import { ICanvasTexts, ITextBlockElement } from '../../pages';
import { ITextBlocksConfigPanelState } from '../LeftSideBar/TextBlocksCreator/panel';
import BackgroundImage from './BackgroundImage';
import EditTextArea from './TextArea';
import { canvasStyle, testStyle } from './style';
import CanvasText from './Text';
import TransformerComponent from './Transformer';
import CharacteristicsLayer, { ICharacteristicElement } from './CharacteristicsLayer'

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
  }
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
    const { canvasTexts, onRef, onTextChanged, canvasHeight, canvasWidth, characteristics } = this.props;
    const { textBlocks, selectedTextBlock } = canvasTexts;
    //const test = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="venus" class="svg-inline--fa fa-venus fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>'
    return (
      <Card elevation={Elevation.ONE} css={canvasStyle}>
        {process.browser && (
          <Stage
            ref={onRef}
            width={canvasWidth}
            height={canvasHeight}
            onClick={this.handleStageMouseDown}
          >
            <BackgroundImage backgroundImage={backgroundImage} canvasHeight={canvasHeight} canvasWidth={canvasWidth} />
            <Layer  >
              {Object.values(textBlocks).map(textBlock => (
                <CanvasText
                  key={textBlock.id}
                  {...textBlock}
                  maxHeight={canvasHeight}
                  maxWidth={canvasWidth}
                  onClick={this.onTextClick}
                  onDoubleClick={this.onDoubleClick}
                  onMouseDown={this.onMouseDown}
                />
              ))}

              <CharacteristicsLayer canvasHeight={canvasHeight} canvasWidth={canvasWidth} characteristics={characteristics} />

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
