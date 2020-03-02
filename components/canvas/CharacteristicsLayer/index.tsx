/** @jsx jsx */

import React, { Component, createRef, RefObject } from 'react';
import { jsx } from '@emotion/core';
import { Text, Path, Group, Label, Tag } from 'react-konva';

export interface ICharacteristicElement {
  priority: string;
  icon: string;
  text: string;
}

interface ICharacteristicsProps {
  canvasWidth: number;
  canvasHeight: number;
  characteristics: {
    [priority: string] : ICharacteristicElement
  };
}

class ContactLayer extends Component<ICharacteristicsProps, any> {


  render() {
    const {canvasHeight, canvasWidth, characteristics} = this.props;
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
      draggable>
        <Group
        height={layerHeigth*0.3}
        width={layerWidth} >
          <Label>
            <Tag fill='#fff' />
            <Text
              text='Características'
              fontSize={20}
              fontStyle='bold'
              width={layerWidth}
              align='center' />
          </Label>
        </Group>
        {Object.keys(characteristics).sort().map((charKey, index) => (
            <Group
            width={layerWidth*0.16}
            height={layerHeigth}
            x={xOffset + index*layerWidth*0.16}
            y={layerHeigth*0.3} >
              <Path
              data={characteristics[charKey].icon}
              fill={'red'}
              scaleX={0.08}
              scaleY={0.08} />
              <Label y={layerHeigth - 12}>
                <Tag fill='#fff' />
                <Text
                width={layerWidth*0.16}
                text={characteristics[charKey].text}
                fontSize={10}
                align={'center'} />
              </Label>
            </Group>
        ))}
      </Group>
    )
  }

}

export default ContactLayer;
