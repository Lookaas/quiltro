/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { Image as KonvaImage, Layer, Rect } from 'react-konva';

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
    const { backgroundImage, canvasHeight, canvasWidth, imageFormat} = this.props;
    if (!backgroundImage) {
      return null;
    }
    const { height, width } = backgroundImage;
    let x = 0;
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
          />
        )}
      </Layer>
    );
  }
}
