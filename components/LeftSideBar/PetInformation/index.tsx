/** @jsx jsx */
import {
  Card,
  Checkbox,
  Elevation,
  FormGroup,
  H4,
  InputGroup,
  Radio,
  TextArea,
  Button
} from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent, createRef } from 'react';
import { IAdoptionForm, ITextBlockElement } from '../../../pages';
import { fakeRadioGroupStyle, sidebarContainerStyle, fileUpload } from './style';

export interface IPetInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  addText: (textBlock: ITextBlockElement) => void;
  onImageUploaded: (prop1: HTMLImageElement) => void;
  formValues: IAdoptionForm;
}

export default class PetInformation extends React.Component<
  IPetInformationProps,
  any
> {
  state = {
    size: '',
    caseOption: '',
    sex: '',
    inputFileRef: createRef<HTMLInputElement>()
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

  openFile = () => {
    this.state.inputFileRef.current!.click();
  };

  loadImageOntoReader = (event: ProgressEvent<FileReader>) => {
    const img = new Image();
    img.src = event.target!.result as string;
    img.addEventListener('load', () => {
      this.props.onImageUploaded(img);
    });
  };

  onFileUploaded = (e: FormEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = this.loadImageOntoReader;
    const file : File = e.currentTarget.files![0];
    if (!file) {
      console.error('!file', file, e);
    }
    reader.readAsDataURL(e.currentTarget.files![0]);
  };

  render() {
    const { onChange, formValues, addText } = this.props;
    const { size, caseOption, sex, inputFileRef } = this.state;
    return (
      <Card elevation={Elevation.ONE} css={sidebarContainerStyle}>
        <H4>Información</H4>
        <div>
          <FormGroup label="Imagen *">
            <Button
              intent="primary"
              rightIcon="upload"
              text="Subir Imagen"
              onClick={this.openFile}
            />
            <input
              ref={inputFileRef}
              onChange={this.onFileUploaded}
              type="file"
              css={fileUpload}
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
              }}
              required
            />
          </FormGroup>
        </div>
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
          <FormGroup label="Sexo *">
            <Radio
              name="sexo-mascota"
              value={formValues['sexo-mascota']}
              onChange={e => onChange('sexo-mascota', Boolean(sex))}
              checked={Boolean(formValues['sexo-mascota'])}
              required
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={e => onChange('sexo-mascota', '1')}
              checked={formValues['sexo-mascota'] === '1'}
              label="Macho"
              value="1"
            />
            <Radio
              onChange={e => onChange('sexo-mascota', '2')}
              checked={formValues['sexo-mascota'] === '2'}
              label="Hembra"
              value="2"
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Tamaño *">
            <Radio
              name="tamaño-mascota"
              value={formValues["tamaño-mascota"]}
              onChange={e => onChange('tamaño-mascota', Boolean(size))}
              checked={Boolean(formValues["tamaño-mascota"])}
              required
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={e => onChange('tamaño-mascota', 's')}
              checked={formValues["tamaño-mascota"] === 's'}
              label="Pequeño"
              value="s"
            />
            <Radio
              onChange={e => onChange('tamaño-mascota', 'm')}
              checked={formValues["tamaño-mascota"] === 'm'}
              label="Mediano"
              value="m"
            />
            <Radio
              onChange={e => onChange('tamaño-mascota', 'l')}
              checked={formValues["tamaño-mascota"] === 'l'}
              label="Grande"
              value="l"
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
      </Card>
    );
  }
}
