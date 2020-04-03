/** @jsx jsx */

import { Component } from 'react';
import { jsx } from '@emotion/core';
import { Text, Group, Label, Tag, Rect } from 'react-konva';

import {IAdoptionForm} from '../../../pages';
import { normalCanvasWidth } from '../../../constants';
import { transformDimension } from '../../../utils';

interface IContactProps {
  canvasWidth: number;
  canvasHeight: number;
  formData: IAdoptionForm;
  color: string;
  textColor: string;
  format: 'square' | 'rectangle' | 'bigRectangle' | 'flatRectangle';
  textStyle: boolean;
  x: number;
  y: number;
}

const dimensions = {
  'square': {w: 184.5, h: 151},
  'rectangle': {w: 230, h: 151},
  'bigRectangle': {w: 322, h: 151},
  'flatRectangle': {w: 368, h: 50}
}

class ContactLayer extends Component<IContactProps, any> {

  render() {
    const {canvasHeight, canvasWidth, formData, color, textColor, format, textStyle, x, y} = this.props;
    const formatDimensions = dimensions[format];
    let layerWidth = formatDimensions.w;
    let layerHeight = formatDimensions.h;
    let fontSize = 10;
    let fontSizeTitle = 14;
    if (canvasWidth < normalCanvasWidth) {
      layerWidth = transformDimension(canvasWidth, normalCanvasWidth, formatDimensions.w);
      layerHeight = transformDimension(canvasWidth, normalCanvasWidth, formatDimensions.h);
      fontSize = transformDimension(canvasWidth, normalCanvasWidth, 9);
      fontSizeTitle = transformDimension(canvasWidth, normalCanvasWidth, 11);
    }
    /*let xOffset = 0.75;
    let yOffset = 0.75;
    if (imageFormat === 'horizontal') {
      layerWidth = canvasWidth*0.3;
      xOffset = 0.35;
      yOffset = 0.68;
    }*/
    console.log('textStyle: ', textStyle);
    if(!textStyle) {
      if (format != 'flatRectangle') {
        return (
          <Group
          x={x}
          y={y}
          width={layerWidth}
          height={layerHeight}
          visible={true}
          >
            {/*<Rect width={layerWidth} height={layerHeight} fill={color} cornerRadius={5} stroke={'#000'} />*/}
            <Group
            width={layerWidth} >
              <Label>
                <Tag fill={color} />
                <Text
                  fill={textColor}
                  text='Contacto'
                  fontSize={fontSizeTitle}
                  fontStyle='bold'
                  width={layerWidth}
                  align='center' />
              </Label>
              {formData['contact-name'] !== '' &&
                <Label y={layerHeight*0.2} >
                  <Tag fill={color} />
                  <Text
                  fill={textColor}
                  text={"\uf007"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
                  <Text
                  x={fontSize+2}
                  fill={textColor}
                  text={formData['contact-name']}
                  fontSize={fontSize}
                  />
                </Label>}
              {formData['contact-phone'] !== '+56 ' &&
                <Label y={layerHeight*0.4}  >
                <Tag fill={color} />
                <Text
                  fill={textColor}
                  text={"\uf10b"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
                <Text
                x={fontSize+2}
                fill={textColor}
                text={formData['contact-phone']}
                fontSize={fontSize}
                />
              </Label>}
                {formData['contact-email'] !== '' &&
                <Label y={layerHeight*0.6} >
                <Tag fill={color} />
                <Text
                  fill={textColor}
                  text={"\uf0e0"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
                <Text
                x={fontSize+2}
                fill={textColor}
                text={formData['contact-email']}
                fontSize={fontSize}
                />
              </Label>}
                {formData['contact-city'] !== '' &&
                <Label y={layerHeight*0.8} >
                <Tag fill={color} />
                <Text
                  fill={textColor}
                  text={"\uf041"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
                <Text
                x={fontSize+2}
                fill={textColor}
                text={formData['contact-city']}
                fontSize={fontSize}
                />
              </Label>}
            </Group>
          </Group>
        )
      }
      else {
        return (
          <Group
        x={x}
        y={y}
        width={layerWidth}
        height={layerHeight}
        visible={true}
        >
          <Label y={layerHeight*0.4}>
            <Tag fill={color} />
            <Text
              fill={textColor}
              text='Contacto'
              fontSize={fontSizeTitle}
              fontStyle='bold' />
          </Label>
          <Group
          width={layerWidth*0.8}
          x={layerWidth*0.2} >
            {formData['contact-name'] !== '' &&
              <Label y={layerHeight*0.2} >
                <Tag fill={color} />
                <Text
                  fill={textColor}
                  text={"\uf007"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
                <Text
                x={fontSize+2}
                fill={textColor}
                text={formData['contact-name']}
                fontSize={fontSize}
                />
              </Label>}
            {formData['contact-phone'] !== '+56 ' &&
              <Label y={layerHeight*0.7}  >
              <Tag fill={color} />
              <Text
                  fill={textColor}
                  text={"\uf10b"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
              <Text
              x={fontSize+2}
              fill={textColor}
              text={formData['contact-phone']}
              fontSize={fontSize}
              />
            </Label>}
              {formData['contact-email'] !== '' &&
              <Label y={layerHeight*0.2} x={layerWidth*0.4} >
              <Tag fill={color} />
              <Text
                  fill={textColor}
                  text={"\uf0e0"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
              <Text
              x={fontSize+2}
              fill={textColor}
              text={formData['contact-email']}
              fontSize={fontSize}
              />
            </Label>}
              {formData['contact-city'] !== '' &&
              <Label y={layerHeight*0.7} x={layerWidth*0.4} >
              <Tag fill={color} />
              <Text
                  fill={textColor}
                  text={"\uf041"}
                  fontFamily="FontAwesome"
                  fontSize={fontSize}
                  />
              <Text
              x={fontSize+2}
              fill={textColor}
              text={formData['contact-city']}
              fontSize={fontSize}
              />
            </Label>}
          </Group>
        </Group>
        )
      }
    } else {
      let finalText = "";
      if(formData['contact-name'] !== '' ) finalText += formData['contact-name'];
      if(formData['contact-phone'] !== '+56 ' ) finalText += ' | ' + formData['contact-phone'];
      if(formData['contact-email'] !== '' ) finalText += ' | ' + formData['contact-email'];
      if(formData['contact-city'] !== '' ) finalText += ' | ' + formData['contact-city'];

      return (
        <Group
          x={5}
          y={canvasHeight - 50}
          width={layerWidth}
          visible={true}
        >
          <Group width={layerWidth} >
            <Label>
              <Tag fill={color} />
              <Text
                fill={textColor}
                text="Contacto"
                fontSize={14}
                fontStyle='bold'
                width={layerWidth}
                align='center' />
            </Label>
            {finalText !== '' &&
              <Label x={90} y={2} >
                <Tag fill={color} />
                <Text
                fill={textColor}
                text={finalText}
                fontSize={11}
                />
              </Label>}
          </Group>
        </Group>
      )
    }
  }

}

export default ContactLayer;
