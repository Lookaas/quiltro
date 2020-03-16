/** @jsx jsx */

import React, { Component, createRef, RefObject } from 'react';
import { jsx } from '@emotion/core';
import { Text, Path, Group, Label, Tag } from 'react-konva';
import {IAdoptionForm} from '../../../pages'


interface IContactProps {
  canvasWidth: number;
  canvasHeight: number;
  formData: IAdoptionForm;
  color: string;
  textColor: string;
}

class ContactLayer extends Component<IContactProps, any> {

  render() {
    const {canvasHeight, canvasWidth, formData, color, textColor} = this.props;
    const layerWidth = canvasWidth*0.2;
    return (
      <Group
      x={canvasWidth*0.75}
      y={canvasHeight*0.75}
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
  }

}

export default ContactLayer;
