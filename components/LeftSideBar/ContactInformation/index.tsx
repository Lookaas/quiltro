/** @jsx jsx */
import { Card, Elevation, FormGroup, H4, InputGroup, NumericInput, Tag, Icon } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent, ChangeEvent } from 'react';
import { IAdoptionForm } from '../../../pages';
import { sidebarContainerStyle } from './style';

export interface IContactInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  formValues: IAdoptionForm;
}

export default class ContactInformation extends React.Component<
  IContactInformationProps,
  any
> {
  render() {
    const { onChange, formValues } = this.props;
    return (
      <Card elevation={Elevation.ONE} css={sidebarContainerStyle}>
        <H4>Datos de contacto</H4>
        <div>
          <FormGroup label="Nombre *">
            <InputGroup
              placeholder="Nombre"
              name="nombre-contacto"
              required
              value={formValues['nombre-contacto']}
              onChange={ (e: FormEvent<HTMLInputElement>) : void => {
                onChange('nombre-contacto', e.currentTarget.value);
              }}
              leftIcon='person'
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Teléfono *">
            <InputGroup
              placeholder="Teléfono"
              name="telefono-contacto"
              value={formValues['telefono-contacto']}
              onChange={(e: ChangeEvent<HTMLInputElement>) : void => {
                onChange('telefono-contacto', e.currentTarget.value);
              }}
              leftIcon='mobile-phone'
              required
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Email *">
            <InputGroup
              name="Email"
              type="email"
              placeholder="Email"
              value={formValues['email-contacto']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {
                onChange('email-contacto', e.currentTarget.value);
              }}
              leftIcon='inbox'
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Ciudad *">
            <InputGroup
              placeholder="Ciudad"
              name="ciudad-contacto"
              value={formValues['ciudad-contacto']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {
                onChange('ciudad-contacto', e.currentTarget.value);
              }}
              leftIcon='home'
            />
          </FormGroup>
        </div>
      </Card>
    );
  }
}
