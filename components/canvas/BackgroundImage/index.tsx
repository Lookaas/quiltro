/** @jsx jsx */
import { jsx } from '@emotion/core';
import {Component, createRef, RefObject} from 'react';
import { Image as KonvaImage, Layer } from 'react-konva';
import {Image as ImageType} from 'konva/types/shapes/Image';

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

export default class BackgroundImage extends Component<
  IBackgroundImageProps,
  any > {

    testRef = createRef<ImageType>();

  componentDidMount() {
    this.testRef.current!.zIndex(0);
  }

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
    const { height, width } = backgroundImage;

    let backgroundImageWidth = transformDimension(imageHeight, height, width);
    let backgroundImageHeigth = imageHeight;

    let draggFunc = (pos : {x: number, y: number}) => {
      let newX = pos.x;
      const deltaWidth = backgroundImageWidth - imageWidth;
      if (pos.x > x) {
        newX = x;
      }
      else if (pos.x < x - deltaWidth) {
        newX = x - deltaWidth;
      }
      return {
        x: newX,
        y: 0
      }
    }

    if(backgroundImageWidth < imageWidth) {
      backgroundImageWidth = imageWidth;
      backgroundImageHeigth = transformDimension(imageWidth, width, height);
      draggFunc = (pos : {x: number, y: number}) => {
        let newY = pos.y;
        const deltaHeigth = backgroundImageHeigth - imageHeight;
        if (pos.y > 0) {
          newY = 0;
        }
        else if (pos.y < deltaHeigth) {
          newY = deltaHeigth;
        }
        return {
          x: x,
          y: newY
        }
      }
    }

    /*if (imageFormat === 'v') { //imagen vertical
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
    }*/

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
          <KonvaImage
          ref={this.testRef}
            image={backgroundImage}
            x={x}
            y={0}
            width={backgroundImageWidth}
            height={backgroundImageHeigth}
            draggable
            dragBoundFunc={draggFunc}
          />
    );
  }
}
