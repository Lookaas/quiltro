/** @jsx jsx */

import { Component } from 'react';
import { jsx } from '@emotion/core';
import { Text, Group, Label, Tag } from 'react-konva';
import {IAdoptionForm} from '../../../pages'


interface IContactProps {
  canvasWidth: number;
  canvasHeight: number;
  formData: IAdoptionForm;
  color: string;
  textColor: string;
  imageFormat: string;
  textStyle: boolean
}

class ContactLayer extends Component<IContactProps, any> {

  render() {
    const {canvasHeight, canvasWidth, formData, color, textColor, imageFormat, textStyle} = this.props;
    let layerWidth = canvasWidth*0.2;
    let xOffset = 0.75;
    let yOffset = 0.75;
    if (imageFormat === 'horizontal') {
      layerWidth = canvasWidth*0.3;
      xOffset = 0.35;
      yOffset = 0.68;
    }
    console.log('textStyle: ', textStyle);
    if(!textStyle){
      return (
        <Group
        x={canvasWidth * xOffset}
        y={canvasHeight * yOffset}
        width={layerWidth}
        visible={true}
        >
          <Group
          width={layerWidth} >
            <Label>
              <Tag fill={color} />
              <Text
                fill={textColor}
                text='Contacto'
                fontSize={14}
                fontStyle='bold'
                width={layerWidth}
                align='center' />
            </Label>
            {formData['contact-name'] !== '' &&
              <Label y={20} >
                <Tag fill={color} />
                <Text
                fill={textColor}
                text={formData['contact-name']}
                fontSize={11}
                />
              </Label>}
            {formData['contact-phone'] !== '+56 ' &&
              <Label y={40}  >
              <Tag fill={color} />
              <Text
              fill={textColor}
              text={formData['contact-phone']}
              fontSize={11}
              />
            </Label>}
              {formData['contact-email'] !== '' &&
              <Label y={60} >
              <Tag fill={color} />
              <Text
              fill={textColor}
              text={formData['contact-email']}
              fontSize={11}
              />
            </Label>}
              {formData['contact-city'] !== '' &&
              <Label y={80} >
              <Tag fill={color} />
              <Text
              fill={textColor}
              text={formData['contact-city']}
              fontSize={11}
              />
            </Label>}
          </Group>
        </Group>
      )
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
