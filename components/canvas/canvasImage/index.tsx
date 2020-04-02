/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Component,  RefObject, createRef } from 'react';
import { Layer, Stage, Text, Label, Tag, Rect, Group, Line } from 'react-konva';
import {Rect as RectType} from 'konva/types/shapes/Rect';

import BackgroundImage from '../BackgroundImage';
import CharacteristicsLayer, { ICharacteristicElement } from '../CharacteristicsLayer';
import ContactLayer from '../ContactLayer';
import { IAdoptionForm, ICanvasFormat } from '../../../pages';
import { imageFormatsLimits, normalCanvasWidth } from '../../../constants';
import { transformDimension } from '../../../utils';

interface ICanvasImageProps {
  onRef: RefObject<any>;
  image: HTMLImageElement | null;
  canvasHeight: number;
  canvasWidth: number;
  characteristics: {
    [priority: string] : ICharacteristicElement
  },
  formData: IAdoptionForm;
  color: string;
  textColor: string;
  backgroundImage: HTMLImageElement | null;
  canvasType: 'c' | 'v';
}

class CanvasImage extends Component<ICanvasImageProps, any>{

  testRef = createRef<RectType>();

  componentDidMount() {
    //this.testRef.current!.zIndex(0);
  }

  render() {
    const {
      onRef,
      canvasHeight,
      canvasWidth,
      characteristics,
      formData,
      color,
      textColor,
      image,
      backgroundImage,
      canvasType
    } = this.props;

    let imageScale = 0;
    let imageFormat : 'c' | 'v' | 'h' = 'c';
    if (backgroundImage !== null) {
      const { height, width } = backgroundImage;

      imageScale = width / height;

      if (imageScale <= imageFormatsLimits.betweenVerticalAndSquare) { //imagen vertical
        imageFormat = 'v';
      }
      else if (imageScale >= imageFormatsLimits.betweenSquareAndHorizonatl) { //imagen horizontal
        imageFormat = 'h';
      }
      else {//imagen cuadrada
        imageFormat = 'c';
      }
    }

    let imageHeight = 0;
    let imageWidth = 0;
    let imageX = 0;
    let contactFormat : 'square' | 'rectangle' | 'bigRectangle' | 'flatRectangle' = 'square';
    let contactX = 0;
    let contactY = 0;
    let characteristicsFormat : '3x2'| '3x2-large' | '3x2-larger' | '2x3' | '1x6' = '3x2';
    let characteristicsX = 0;
    let characteristicsY = 0;
    let footerWidth = canvasWidth;
    let titleWidth = canvasWidth;
    let titleY = 0;
    switch (canvasType+imageFormat) {
      case 'cc' :
        imageHeight = canvasHeight*(9/12);
        imageWidth = imageHeight;
        imageX = canvasWidth*(3/12);
        contactFormat = 'flatRectangle';
        contactX = imageX;
        contactY = canvasHeight*(10/12);
        characteristicsFormat = '1x6';
        characteristicsY = canvasHeight*(2/12);
        titleWidth = imageX;
        titleY = canvasWidth*(0.5/12);
        break;
      case 'vc' :
        imageHeight = canvasWidth;
        imageWidth = canvasWidth;
        contactFormat = 'rectangle';
        contactX = canvasWidth*(6.5/12);
        contactY = canvasHeight*(13/18);
        characteristicsFormat = '3x2-large';
        characteristicsY = contactY;
        characteristicsX = canvasWidth*(0.5/12);
        titleY = canvasHeight*(12.3/18);
        break;
      case 'cv' :
        imageHeight = canvasHeight;
        imageWidth = canvasWidth*(7/12);
        imageX = canvasWidth*(5/12);
        contactFormat = 'square';
        contactX = canvasWidth*(0.5/12);
        contactY = canvasHeight*(7.5/12);
        characteristicsY = canvasHeight*(2.5/12);
        characteristicsX = contactX;
        footerWidth = imageX;
        titleWidth = imageX;
        titleY = canvasWidth*(0.5/12);
        break;
      case 'vv' :
        imageHeight = canvasHeight*(12/18);
        imageWidth = canvasWidth*(7/12);
        imageX = canvasWidth*(5/12);
        contactFormat = 'bigRectangle';
        contactX = canvasWidth*(2.5/12);
        contactY = canvasHeight*(13/18);
        characteristicsFormat = '1x6';
        characteristicsY = canvasHeight*(3.5/18);
        characteristicsX = canvasWidth*(1/12);
        titleWidth = imageX;
        titleY = canvasHeight*(1/18);
        break;
      case 'ch' :
        imageHeight = canvasHeight*(7/12);
        imageWidth = canvasWidth;
        contactFormat = 'rectangle';
        contactX = canvasWidth*(7.5/12);
        contactY = canvasHeight*(7.7/12);
        characteristicsFormat = '3x2-large';
        characteristicsY = contactY;
        characteristicsX = canvasWidth*(0.5/12);
        titleY = canvasHeight*(7.1/12);
        break;
      case 'vh' :
        imageHeight = canvasHeight*(7/18);
        imageWidth = canvasWidth;
        contactFormat = 'bigRectangle';
        contactX = canvasWidth*(2.5/12);
        contactY = canvasHeight*(13/18);
        characteristicsFormat = '3x2-larger';
        characteristicsY = canvasHeight*(8.5/18);
        characteristicsX = contactX;
        titleY = canvasHeight*(7.3/18);
        break;
      default:
        //do nothing~
    }

    let titleSize = 18;
    let footerSize = 12;
    let footerOffset = 30;
    if (formData['nombre-mascota'].length > 12) {
      titleSize = 16;
    }

    if (canvasWidth < normalCanvasWidth) {
      titleSize = transformDimension(canvasWidth, normalCanvasWidth, titleSize);
      footerSize = transformDimension(canvasWidth, normalCanvasWidth, 12);
      footerOffset = transformDimension(canvasWidth, normalCanvasWidth, 30);
    }

    const titleText = formData['nombre-mascota'] !== '' ? formData['nombre-mascota'] : 'Nombre';
    const subtitleText = formData['caso-mascota'] !== '' ? (formData['caso-mascota'] === '1' ? "En adopción" : 'Perdido') : 'Caso mascota';

    return (
      <Stage
        ref={onRef}
        width={canvasWidth}
        height={canvasHeight}
      >
        <Layer>
          <Line
            points = {[0, 0, imageX, 0, imageX, imageHeight, canvasWidth, imageHeight, canvasWidth, canvasHeight, 0, canvasHeight, 0, 0]}
            fill={color}
            closed={true} />
                    {
          backgroundImage !== null ?
          <BackgroundImage
          backgroundImage={backgroundImage}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          imageFormat={imageFormat}
          imageScale={imageScale}
          x={imageX} />
          :
            <Rect width={imageWidth} height={imageHeight} x={imageX} fill='#efefef' />
        }
        </Layer>

        <Layer>
        {canvasType+imageFormat != "cv" && canvasType+imageFormat != "cc" && canvasType+imageFormat != "vv" ?
          <Label y={titleY}>
          <Tag fill={color} />
          <Text
          fill={textColor}
          fontSize={titleSize}
          text={titleText + ' ' + subtitleText}
          align={'center'}
          width={titleWidth}
          fontStyle={'bold'}
          // _useStrictMode
          />
        </Label>
        :
          <Group y={titleY}>
          <Label>
          <Tag fill={color} />
          <Text
          fill={textColor}
          fontSize={titleSize}
          text={titleText}
          align={'center'}
          width={titleWidth}
          fontStyle={'bold'}
          // _useStrictMode
          />
        </Label>
        <Label
          y={titleSize + 5}
          >
          <Tag fill={color} />
          <Text
          fill={textColor}
          fontSize={titleSize}
          text={subtitleText}
          align={'center'}
          width={titleWidth}
          // _useStrictMode
          />
        </Label>
          </Group>}

          <CharacteristicsLayer
            canvasWidth={canvasWidth}
            characteristics={characteristics}
            color={color}
            textColor={textColor}
            layerFormat={characteristicsFormat}
            x={characteristicsX}
            y={characteristicsY} />

          <ContactLayer
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            formData={formData}
            color={color}
            textColor={textColor}
            format={contactFormat}
            textStyle={image !== null && image.width === image.height && canvasHeight === canvasWidth}
            x={contactX}
            y={contactY}
          />

          <Label
          y={canvasHeight-footerOffset} >
            <Tag fill={'#51947f'} />
            <Text
            fill={textColor}
              padding={10}
              width={footerWidth}
              text='difunde.quiltroschile.cl'
              fontSize={footerSize}
              align='center' />
          </Label>
        </Layer>
      </Stage>
    )
  }

}

export default CanvasImage;
