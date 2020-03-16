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
}

class CharacteristicsLayer extends Component<ICharacteristicsProps, any> {

  render() {
    const {canvasHeight, canvasWidth, characteristics, color, textColor} = this.props;
    const layerWidth = canvasWidth*0.7;
    const layerHeigth = canvasHeight*0.1;
    console.log(characteristics);
    const keys = Object.keys(characteristics);
    console.log(characteristics[keys[0]]);
    const offsetDelta = 0.08;
    const xOffset = layerWidth*offsetDelta*(6-keys.length);
    return (
      <Group
      x={canvasWidth*0.05}
      y={canvasHeight*0.75}
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
          const groupWidth = layerWidth*0.16;
          const xGroup = xOffset + index*layerWidth*0.16;
          const yGroup = layerHeigth*0.3;
          const xIcon = (groupWidth/2) - ((characteristic.icon.w*characteristic.scale)/2)
          return (
            <Group
            width={groupWidth}
            height={layerHeigth}
            x={xGroup}
            y={yGroup} >
              <Path
              data={characteristic.icon.path}
              fill={'white'}
              scaleX={characteristic.scale}
              scaleY={characteristic.scale}
              x={xIcon}
              y={10} />
              <Label y={layerHeigth - 10}>
                <Tag fill={color} />
                <Text
                fill={textColor}
                width={layerWidth*0.16}
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
