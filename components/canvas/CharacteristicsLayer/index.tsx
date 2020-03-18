/** @jsx jsx */

import React, { Component, createRef, RefObject } from 'react';
import { jsx } from '@emotion/core';
import { Text, Path, Group, Label, Tag } from 'react-konva';
import { IIcon } from '../../../assets/icons'

export interface ICharacteristicElement {
  priority: string;
  icon: IIcon;
  text: string;
  scale: number;
}

interface ICharacteristicsProps {
  canvasWidth: number;
  canvasHeight: number;
  characteristics: {
    [priority: string] : ICharacteristicElement
  };
  color: string;
  textColor: string;
  imageFormat: string;
}

class CharacteristicsLayer extends Component<ICharacteristicsProps, any> {

  render() {
    const {canvasHeight, canvasWidth, characteristics, color, textColor, imageFormat} = this.props;
    let canvasWidthProportion = 0.7;
    let canvasHeightProportion = 0.1;
    let layerXOffsetPercentage = 0.05;
    let layerYOffsetPercentage = 0.75;
    const keys = Object.keys(characteristics);
    const offsetDelta = 0.08;
    let xOffset1 = canvasWidth*0.7*offsetDelta*(6-keys.length);
    let xOffset2 = 0;
    let groupWidthProportion = 0.16;
    if (imageFormat === 'horizontal') {
      canvasWidthProportion = 0.50;
      canvasHeightProportion = 0.3;
      layerXOffsetPercentage = 0.25;
      layerYOffsetPercentage = 0.3;
      xOffset1 = 0;
      groupWidthProportion = 0.38;
      if (keys.length < 3) {
        xOffset1 = canvasWidth*canvasWidthProportion*offsetDelta*(3-keys.length);
      } else {
        xOffset2 = canvasWidth*canvasWidthProportion*offsetDelta*(6-keys.length);
      }
    }
    const layerWidth = canvasWidth*canvasWidthProportion;
    const layerHeigth = canvasHeight*canvasHeightProportion;
    return (
      <Group
      x={canvasWidth*layerXOffsetPercentage}
      y={canvasHeight*layerYOffsetPercentage}
      height={layerHeigth}
      width={layerWidth}
      visible={true}
      >
        <Group
        height={layerHeigth*0.3}
        width={layerWidth} >
          <Label>
            <Tag fill={color} />
            <Text
              fill={textColor}
              text='Características'
              fontSize={20}
              fontStyle='bold'
              width={layerWidth}
              align='left' />
          </Label>
        </Group>
        {Object.keys(characteristics).sort().map((charKey, index) => {
          const characteristic = characteristics[charKey];
          const groupWidth = layerWidth*groupWidthProportion;
          let groupHeight = layerHeigth;
          let xGroup = xOffset1 + index*layerWidth*groupWidthProportion;
          let yGroup = layerHeigth*0.3;
          if (imageFormat === 'horizontal') {
            groupHeight = layerHeigth*0.35;
            if (index >= 3) {
              xGroup = xOffset2 + (index-3)*layerWidth*groupWidthProportion;
              yGroup = layerHeigth*0.74;
            }
          }
          const xIcon = (groupWidth/2) - ((characteristic.icon.w*characteristic.scale)/2)
          return (
            <Group
            width={groupWidth}
            height={groupHeight}
            x={xGroup}
            y={yGroup} >
              <Path
              data={characteristic.icon.path}
              fill={'white'}
              scaleX={characteristic.scale}
              scaleY={characteristic.scale}
              x={xIcon}
              y={10} />
              <Label y={groupHeight}>
                <Tag fill={color} />
                <Text
                fill={textColor}
                width={groupWidth}
                text={characteristic.text}
                fontSize={10}
                align={'center'} />
              </Label>
            </Group>
          )
        }
        )}
      </Group>
    )
  }

}

export default CharacteristicsLayer;
