/** @jsx jsx */
import { Card, Elevation, FormGroup, H4, InputGroup } from '@blueprintjs/core';
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
              name="contact-name"
              required
              value={formValues['contact-name']}
              onChange={ (e: FormEvent<HTMLInputElement>) : void => {
                onChange('contact-name', e.currentTarget.value);
              }}
              leftIcon='person'
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Teléfono *">
            <InputGroup
              placeholder="Teléfono"
              name="contact-phone"
              value={formValues['contact-phone']}
              onChange={(e: ChangeEvent<HTMLInputElement>) : void => {
                onChange('contact-phone', e.currentTarget.value);
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
              value={formValues['contact-email']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {
                onChange('contact-email', e.currentTarget.value);
              }}
              leftIcon='inbox'
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Ciudad *">
            <InputGroup
              placeholder="Ciudad"
              name="contact-city"
              value={formValues['contact-city']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {
                onChange('contact-city', e.currentTarget.value);
              }}
              leftIcon='home'
            />
          </FormGroup>
        </div>
      </Card>
    );
  }
}
