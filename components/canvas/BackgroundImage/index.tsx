/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { Image as KonvaImage, Layer, Rect } from 'react-konva';

import { imageFormatsLimits, imageScales } from '../../../constants';
import { transformDimension } from '../../../utils';

export interface IBackgroundImageProps {
  backgroundImage: HTMLImageElement | null;
  //canvasHeight: number;
  //canvasWidth: number;
  imageFormat: string;
  x: number;
  imageWidth: number;
  imageHeight: number;
  imageScale: number;
}

export default class BackgroundImage extends React.Component<
  IBackgroundImageProps,
  any > {

  transformWidth = (oldHeight: number, oldWidth: number, newHeight: number) => {
    return (newHeight*oldWidth)/oldHeight;
  }

  transformHeight = (oldHeight: number, oldWidth: number, newWidth: number) => {
    return (oldHeight*newWidth)/oldWidth;
  }

  render() {
    const {
      backgroundImage,
      // canvasHeight,
      // canvasWidth,
      imageFormat,
      imageHeight,
      imageWidth,
      x,
      imageScale
    } = this.props;
    if (!backgroundImage) {
      return null;
    }

    let backgroundImageWidth = imageWidth;
    let backgroundImageHeigth = imageHeight;
    let backgroundImageX = x;
    const { height, width } = backgroundImage;

    if (imageFormat === 'v') { //imagen vertical
      if (imageScale <= imageScales.vertical) {
        backgroundImageWidth = transformDimension(imageHeight, height, width);
        backgroundImageX = x + imageWidth - backgroundImageWidth;
      }
      else {
        backgroundImageHeigth = transformDimension(imageWidth, width, height);
      }
    }
    else if (imageFormat === 'h') { //imagen horizontal
      if (imageScale >= imageScales.horizontal) {
        backgroundImageHeigth = transformDimension(imageWidth, width, height);
      }
      else {
        backgroundImageWidth = transformDimension(imageHeight, height, width);
        backgroundImageX = x + (imageWidth - backgroundImageWidth)/2;
      }
    }
    else {//imagen cuadrada
      if (imageScale >= imageScales.square) {
        backgroundImageHeigth = transformDimension(imageWidth, width, height);
      }
      else {
        backgroundImageWidth = transformDimension(imageHeight, height, width);
        backgroundImageX = x + (imageWidth - backgroundImageWidth)/2;
      }
    }

    /*let x = 0;
    let y = 0;
    let imageWidth = width;
    let imageHeight = height;
    if (imageFormat === 'vertical' || imageFormat === 'cuadrada') {
      const imageOffset = 0.2;
      const imageProportion = 0.5;
      imageWidth = canvasWidth;
      imageHeight = canvasHeight*imageProportion;
      if (imageFormat === 'vertical') {
        y = canvasHeight*imageOffset;
      }
    }

    else if (imageFormat === 'horizontal') {
      const imageProportion = 0.5;
      imageWidth = canvasWidth*imageProportion;
      imageHeight = canvasHeight;
    }*/

    return (
      <Layer>
        {backgroundImage && (
          <KonvaImage
            image={backgroundImage}
            x={backgroundImageX}
            y={0}
            width={backgroundImageWidth}
            height={backgroundImageHeigth}
          />
        )}
      </Layer>
    );
  }
}
