/** @jsx jsx */

import { Component } from 'react';
import { jsx } from '@emotion/core';
import { Text, Path, Group, Label, Tag } from 'react-konva';
import { IIcon } from '../../../assets/icons';

import { normalCanvasWidth, characteristicsLayerFormats, IChararacteristicsLayerFormat } from '../../../constants';
import { transformDimension } from '../../../utils';

export interface ICharacteristicElement {
  priority: string;
  icon: IIcon;
  text: string;
  scale: number;
}

interface ICharacteristicsProps {
  canvasWidth: number;
  //canvasHeight: number;
  characteristics: {
    [priority: string] : ICharacteristicElement
  };
  color: string;
  textColor: string;
  layerFormat: '3x2'| '3x2-large' | '3x2-larger' | '2x3' | '1x6';
  x: number;
  y: number;
}

class CharacteristicsLayer extends Component<ICharacteristicsProps, any> {

  transformFormat = (format: IChararacteristicsLayerFormat) : IChararacteristicsLayerFormat => {
    const { canvasWidth } = this.props;
    const newFormat: IChararacteristicsLayerFormat = {
      w: transformDimension(canvasWidth, normalCanvasWidth, format.w),
      h: transformDimension(canvasWidth, normalCanvasWidth, format.h),
      yTitle: transformDimension(canvasWidth, normalCanvasWidth, format.yTitle),
      yIcons: transformDimension(canvasWidth, normalCanvasWidth, format.yIcons),
      positions: format.positions.map(pos => {
        return {
          x: transformDimension(canvasWidth, normalCanvasWidth, pos.x),
          y: transformDimension(canvasWidth, normalCanvasWidth, pos.y)
        }
      })
    }
    return newFormat;
  }

  render() {
    const {/*canvasHeight,*/ canvasWidth, characteristics, color, textColor, layerFormat, x, y} = this.props;
    /*let canvasWidthProportion = 0.7;
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
    */
    let format = characteristicsLayerFormats[layerFormat];
    let fontSize = 11;
    let titleSize = 14;
    let iconsDims = 57.5;
    if (canvasWidth < normalCanvasWidth) {
      format = this.transformFormat(format);
      fontSize = transformDimension(canvasWidth, normalCanvasWidth, 11);
      titleSize = transformDimension(canvasWidth, normalCanvasWidth, 14);
      iconsDims = transformDimension(canvasWidth, normalCanvasWidth, 57.5);
    }
    return (
      <Group
      x={x}
      y={y}
      height={format.h}
      width={format.w}
      visible={true}
      >
          <Label y={format.yTitle}>
            <Tag fill={color} />
            <Text
              fill={textColor}
              text='Características'
              fontSize={titleSize}
              fontStyle='bold'
              width={format.w}
              align='center' />
          </Label>
          <Group y={format.yIcons} >
          {Object.keys(characteristics).sort().map((charKey, index) => {
          const characteristic = characteristics[charKey];
          /*const groupWidth = layerWidth*groupWidthProportion;
          let groupHeight = layerHeigth;
          let xGroup = xOffset1 + index*layerWidth*groupWidthProportion;
          let yGroup = layerHeigth*0.3;
          if (imageFormat === 'horizontal') {
            groupHeight = layerHeigth*0.35;
            if (index >= 3) {
              xGroup = xOffset2 + (index-3)*layerWidth*groupWidthProportion;
              yGroup = layerHeigth*0.74;
            }
          }*/
          const iconProportion = 0.7;
          const xIcon = (iconsDims/2) - (characteristic.icon.w*characteristic.scale/2);
          const yIcon = (iconsDims*iconProportion/2) - (characteristic.icon.h*characteristic.scale/2);
          const xGroup = format.positions[index].x;
          const yGroup = format.positions[index].y;
          return (
            <Group
            width={iconsDims}
            height={iconsDims}
            x={xGroup}
            y={yGroup} >
              <Path
              data={characteristic.icon.path}
              fill={'white'}
              scaleX={characteristic.scale}
              scaleY={characteristic.scale}
              x={xIcon}
              y={yIcon} />
              <Label y={iconProportion*iconsDims}>
                <Tag fill={color} />
                <Text
                fill={textColor}
                width={iconsDims}
                text={characteristic.text}
                fontSize={fontSize}
                align={'center'} />
              </Label>
            </Group>
          )
        }
        )}
          </Group>
      </Group>
    )
  }

}

export default CharacteristicsLayer;
