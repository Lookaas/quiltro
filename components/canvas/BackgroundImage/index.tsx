/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { Image as KonvaImage, Layer } from 'react-konva';

export interface IBackgroundImageProps {
  backgroundImage: HTMLImageElement | null;
  canvasHeight: number;
  canvasWidth: number;
  imageFormat: string;
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
    const { backgroundImage, canvasHeight, canvasWidth, imageFormat } = this.props;
    if (!backgroundImage) {
      return null;
    }
    const { height, width } = backgroundImage;
    const imageProportion = 0.4;
    let x = 0;
    let y = 0;
    let imageWidth = width;
    let imageHeight = height;

    if (imageFormat === 'vertical') {
      if (width < canvasWidth && height < canvasHeight*imageProportion) {
        const yOffset = (canvasHeight*imageProportion - height)/2;
        x = (canvasWidth - width)/2;
        y = canvasHeight*imageProportion + yOffset;
      }
      else if (height < canvasHeight*imageProportion) {
        imageWidth = canvasWidth;
        imageHeight = this.transformHeight(height, width, imageWidth);
        const yOffset = (imageHeight*imageProportion)/2 - imageHeight/2;
        y = canvasHeight*0.3 + yOffset;
      }
      else {
        imageHeight = canvasHeight*imageProportion;
        imageWidth = this.transformWidth(height, width, imageHeight);
        if (imageWidth <= canvasWidth) {
          x = (canvasWidth - imageWidth)/2;
          y = canvasHeight*0.3
        }
        else {
          imageWidth = canvasWidth;
          imageHeight = this.transformHeight(height, width, imageWidth);
          const yOffset = (imageHeight*imageProportion)/2 - imageHeight/2;
          y = canvasHeight*0.3 + yOffset;
        }
      }
    }
    else if (imageFormat === 'cuadrada') {
      imageWidth = canvasWidth;
      imageHeight = this.transformHeight(height, width, imageWidth);
    }
    else if (imageFormat === 'horizontal') {
      imageHeight = canvasHeight;
      imageWidth = this.transformWidth(height, width, imageHeight);
    }

    return (
      <Layer>
        {backgroundImage && (
          <KonvaImage
            image={backgroundImage}
            x={x}
            y={y}
            width={imageWidth}
            height={imageHeight}
            draggable
          />
        )}
      </Layer>
    );
  }
}
