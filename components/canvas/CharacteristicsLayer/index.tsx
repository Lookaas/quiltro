/** @jsx jsx */

import React, { Component, createRef, RefObject } from 'react';
import { jsx } from '@emotion/core';
import { Text, Path, Group } from 'react-konva';

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

class CharacteristicsLayer extends Component<ICharacteristicsProps, any> {

  setPosition() {

  }

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
      y={canvasHeight*0.7}
      height={layerHeigth}
      width={layerHeigth}
      visible={true}>
        {Object.keys(characteristics).sort().map((charKey, index) => (
            <Group
            width={layerWidth*0.16}
            height={layerHeigth}
            x={xOffset + index*layerWidth*0.16}>
              <Path
              data={characteristics[charKey].icon}
              fill={'red'}
              scaleX={0.08}
              scaleY={0.08} />
              <Text
              width={layerWidth*0.16}
              text={characteristics[charKey].text}
              fontSize={10}
              y={layerHeigth - 12}
              align={'center'} />
            </Group>
        ))}
      </Group>
    )
  }

}

export default CharacteristicsLayer;
