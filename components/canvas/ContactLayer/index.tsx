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
      draggable>
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
          {formData['nombre-contacto'] !== '' &&
            <Label y={20} >
              <Tag fill={color} />
              <Text
              fill={textColor}
              text={formData['nombre-contacto']}
              fontSize={11}
              />
            </Label>}
            {formData['telefono-contacto'] !== '+56 ' &&
            <Label y={40}  >
            <Tag fill={color} />
            <Text
            fill={textColor}
            text={formData['telefono-contacto']}
            fontSize={11}
            />
          </Label>}
            {formData['email-contacto'] !== '' &&
            <Label y={60} >
            <Tag fill={color} />
            <Text
            fill={textColor}
            text={formData['email-contacto']}
            fontSize={11}
             />
          </Label>}
            {formData['ciudad-contacto'] !== '' &&
            <Label y={80} >
            <Tag fill={color} />
            <Text
            fill={textColor}
            text={formData['ciudad-contacto']}
            fontSize={11}
             />
          </Label>}
        </Group>
      </Group>
    )
  }

}

export default ContactLayer;
