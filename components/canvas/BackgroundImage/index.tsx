/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { Image as KonvaImage, Layer, Rect } from 'react-konva';

export interface IBackgroundImageProps {
  backgroundImage: HTMLImageElement | null;
  canvasHeight: number;
  canvasWidth: number;
  imageFormat: string;
  rectColor: string;
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
    const { backgroundImage, canvasHeight, canvasWidth, imageFormat, rectColor } = this.props;
    if (!backgroundImage) {
      return null;
    }
    const { height, width } = backgroundImage;
    let x = 0;
    let y = 0;
    let imageWidth = width;
    let imageHeight = height;
    //let rectX = 0, rectY = 0, rectWidth = 0, rectHeigth = 0;
    if (imageFormat === 'vertical' || imageFormat === 'cuadrada') {
      const imageOffset = 0.2;
      const imageProportion = 0.5;
      imageWidth = canvasWidth;
      imageHeight = canvasHeight*imageProportion;
      if (imageFormat === 'vertical') {
        y = canvasHeight*imageOffset;
      }
      /*if (imageFormat === 'vertical') {
        rectY = imageOffset*canvasHeight;
      }
      if (width < canvasWidth && height < canvasHeight*imageProportion) {
        x = (canvasWidth - width)/2;
        if (imageFormat === 'vertical') {
          const yOffset = (canvasHeight*imageProportion - height)/2;
          y = canvasHeight*imageOffset + yOffset;
        }
      }
      else if (height < canvasHeight*imageProportion) {
        imageWidth = canvasWidth-20;
        imageHeight = this.transformHeight(height, width, imageWidth);
        x = 10;
        if (imageFormat === 'vertical') {
          const yOffset = (imageHeight*imageProportion)/2 - imageHeight/2;
          y = canvasHeight*imageOffset + yOffset;
        }
      }
      else {
        imageHeight = canvasHeight*imageProportion-20;
        imageWidth = this.transformWidth(height, width, imageHeight);
        if (imageWidth <= canvasWidth) {
          x = (canvasWidth - imageWidth)/2;
          if (imageFormat === 'vertical') {
            y = canvasHeight*imageOffset+10;
          }
          else {
            y = 10;
          }
        }
        else {
          imageWidth = canvasWidth-20;
          imageHeight = this.transformHeight(height, width, imageWidth);
          const yOffset = (imageHeight*imageProportion)/2 - imageHeight/2;
          x = 10;
          if (imageFormat === 'vertical') {
            y = canvasHeight*imageOffset + yOffset;
          }
        }
      }*/
    }

    else if (imageFormat === 'horizontal') {
      const imageProportion = 0.5;
      imageWidth = canvasWidth*imageProportion;
      imageHeight = canvasHeight;
      /*if (width < canvasWidth*imageProportion && height < canvasHeight) {
        x = (canvasWidth*imageProportion - width)/2;
        y = (canvasHeight - height)/2;
      }
      else if (width < canvasWidth*imageProportion) {
        imageHeight = canvasHeight-20;
        imageWidth = this.transformWidth(height, width, imageHeight);
        x = (canvasWidth*imageProportion - imageWidth)/2;
        y = 10;
      }
      else {
        imageWidth = canvasWidth*imageProportion-20;
        imageHeight = this.transformHeight(height, width, imageWidth);
        y = (canvasHeight - imageHeight)/2;
        x = 10;
      }*/
    }

    return (
      <Layer>
        {/*<Rect width={rectWidth} height={rectHeigth} x={rectX} y={rectY} fill={rectColor} />*/}
        {backgroundImage && (
          <KonvaImage
            image={backgroundImage}
            x={x}
            y={y}
            width={imageWidth}
            height={imageHeight}
          />
        )}
      </Layer>
    );
  }
}
