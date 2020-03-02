/** @jsx jsx */

import React, { Component, createRef, RefObject } from 'react';
import { jsx } from '@emotion/core';
import { Text, Path, Group, Label, Tag } from 'react-konva';
import {IAdoptionForm} from '../../../pages'


interface IContactProps {
  canvasWidth: number;
  canvasHeight: number;
  formData: IAdoptionForm;
}

class ContactLayer extends Component<IContactProps, any> {

  render() {
    const {canvasHeight, canvasWidth, formData} = this.props;
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
            <Tag fill='#fff' />
            <Text
              text='Contacto'
              fontSize={14}
              fontStyle='bold'
              width={layerWidth}
              align='center' />
          </Label>
          {formData['nombre-contacto'] !== '' &&
            <Label y={20} >
              <Tag fill='#fff' />
              <Text
              text={formData['nombre-contacto']}
              fontSize={14}
              />
            </Label>}
            {formData['telefono-contacto'] !== '+56 ' &&
            <Label y={40}  >
            <Tag fill='#fff' />
            <Text
            text={formData['telefono-contacto']}
            fontSize={14}
            />
          </Label>}
            {formData['email-contacto'] !== '' &&
            <Label y={60} >
            <Tag fill='#fff' />
            <Text
            text={formData['email-contacto']}
            fontSize={14}
             />
          </Label>}
            {formData['ciudad-contacto'] !== '' &&
            <Label y={80} >
            <Tag fill='#fff' />
            <Text
            text={formData['ciudad-contacto']}
            fontSize={14}
             />
          </Label>}
        </Group>
      </Group>
    )
  }

}

export default ContactLayer;
