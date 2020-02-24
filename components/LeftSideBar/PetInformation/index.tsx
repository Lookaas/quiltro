/** @jsx jsx */
import {
  Card,
  Checkbox,
  Elevation,
  FormGroup,
  H4,
  InputGroup,
  Radio,
  TextArea
} from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent } from 'react';
import { IAdoptionForm } from '../../../pages';
import { fakeRadioGroupStyle, sidebarContainerStyle } from './style';

export interface IPetInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  addText: (id: string, value: string) => void;
  formValues: IAdoptionForm;
}

export default class PetInformation extends React.Component<
  IPetInformationProps,
  any
> {
  state = {
    size: '',
    caseOption: '',
    sex: ''
  };

  onSizeChanged = (e: FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const size = e.currentTarget.value;
    this.setState({ size });
    onChange('tamaño-mascota', size);
  };

  onCaseChanged = (e: FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const caseOption = e.currentTarget.value;
    this.setState({ caseOption });
    onChange('caso-mascota', caseOption);
  };

  onSexChanged = (e: FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const sex = e.currentTarget.value;
    this.setState({ sex });
    onChange('caso-mascota', sex);
  };

  render() {
    const { onChange, formValues, addText } = this.props;
    const { size, caseOption, sex } = this.state;
    return (
      <Card elevation={Elevation.ONE} css={sidebarContainerStyle}>
        <H4>Información</H4>
        <div>
          <FormGroup label="Caso *">
            <Radio
              name="caso"
              value={caseOption}
              onChange={e => onChange('caso-mascota', caseOption)}
              checked={Boolean(caseOption)}
              required
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={this.onCaseChanged}
              checked={caseOption === '1'}
              label="Mascota en adopción"
              value="1"
            />
            <Radio
              onChange={this.onCaseChanged}
              checked={caseOption === '2'}
              label="Mascota perdida"
              value="2"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label={'Nombre'}>
            <InputGroup
              name="nombre-mascota"
              placeholder="Nombre"
              intent="primary"
              value={formValues['nombre-mascota']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {
                onChange('nombre-mascota', e.currentTarget.value);
                addText('nombre-mascota', 'Me llamo ' + e.currentTarget.value);
              }}
              required
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Tamaño *">
            <Radio
              name="tamaño-mascota"
              value={size}
              onChange={e => onChange('tamaño-mascota', Boolean(size))}
              checked={Boolean(size)}
              required
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={this.onSizeChanged}
              checked={size === 's'}
              label="Pequeño"
              value="s"
            />
            <Radio
              onChange={this.onSizeChanged}
              checked={size === 'm'}
              label="Mediano"
              value="m"
            />
            <Radio
              onChange={this.onSizeChanged}
              checked={size === 'l'}
              label="Grande"
              value="l"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Sexo *">
            <Radio
              name="sexo-mascota"
              value={sex}
              onChange={e => onChange('sexo-mascota', Boolean(sex))}
              checked={Boolean(sex)}
              required
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={this.onSexChanged}
              checked={sex === '1'}
              label="Macho"
              value="1"
            />
            <Radio
              onChange={this.onSexChanged}
              checked={sex === '2'}
              label="Hembra"
              value="2"
            />
          </FormGroup>
        </div>
        <div>
          <Checkbox
            name="esterilizado"
            label="¿Está esterilizado?"
            checked={formValues.esterilizado}
            onChange={e => {
              onChange('esterilizado', !formValues.esterilizado);
            }}
          />
          <Checkbox
            name="chip"
            label="¿Tiene chip?"
            checked={formValues.chip}
            onChange={e => {
              onChange('chip', !formValues.chip);
            }}
          />
          <Checkbox
            name="vacunas"
            label="¿Tiene las vacunas al día?"
            checked={formValues.vacunas}
            onChange={e => {
              onChange('vacunas', !formValues.vacunas);
            }}
          />
        </div>
        <div>
          <FormGroup label="Edad">
            <InputGroup
              name="edad-mascota"
              value={formValues['edad-mascota']}
              onChange={(e: FormEvent<HTMLInputElement>) : void => onChange('edad-mascota', e.currentTarget.value)}
              placeholder="Años"
              required
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Información Extra">
            <TextArea
              fill
              growVertically
              name="informacion-extra-mascota"
              placeholder="Extra"
              value={formValues['informacion-extra-mascota']}
              onChange={e =>
                onChange('informacion-extra-mascota', e.currentTarget.value)
              }
            />
          </FormGroup>
        </div>
      </Card>
    );
  }
}
