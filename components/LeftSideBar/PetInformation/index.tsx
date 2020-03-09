/** @jsx jsx */
import {
  Card,
  Checkbox,
  Elevation,
  FormGroup,
  H4,
  InputGroup,
  Radio,
  Button,
  Tag,
  RadioGroup
} from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent, createRef } from 'react';
import { IAdoptionForm, ITextBlockElement } from '../../../pages';
import { fakeRadioGroupStyle, sidebarContainerStyle, fileUpload, containerStyle } from './style';
import {faDog} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export interface IPetInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  addText: (textBlock: ITextBlockElement) => void;
  onImageUploaded: (prop1: HTMLImageElement) => void;
  changeDimensions: (imageFormat: string) => void;
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
    inputFileRef: createRef<HTMLInputElement>(),
    imageFormat: 'cuadrada'
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

  onChangeDimensions = (e : FormEvent<HTMLInputElement>) => {
    const {changeDimensions} = this.props;
    const newImageFormat = e.currentTarget.value;
    this.setState({
      imageFormat: newImageFormat
    });
    changeDimensions(newImageFormat);
  }

  render() {
    const { onChange, formValues, addText, changeDimensions } = this.props;
    const { size, caseOption, sex, inputFileRef, imageFormat } = this.state;
    const añosTag = <Tag>Años</Tag>
    const mesesTag = <Tag>Meses</Tag>
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
          <RadioGroup
            label='Dimensiones de imagen *'
            onChange={this.onChangeDimensions}
            selectedValue={imageFormat} >
              <Radio label='Cuadrada' value='cuadrada' />
              <Radio label='Vertical' value='vertical' />
              <Radio label='Horizontal' value='horizontal' />
            </RadioGroup>
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
          <FormGroup label="Edad aproximada *">
            <div style={{display: 'flex', width: '100%'}}>
            <div style={{width: '50%', margin: '2px'}} >
            <InputGroup
              name="edad-mascota"
              value={formValues['años-mascota']}
              placeholder="Años"
              rightElement={añosTag}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {onChange('años-mascota', e.currentTarget.value)}}
              max={20}
              min={0}
              required
            />
            </div>
            <div style={{width: '50%', margin: '2px'}} >
            <InputGroup
              name="edad-mascota"
              value={formValues['meses-mascota']}
              placeholder="Meses"
              rightElement={mesesTag}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {onChange('meses-mascota', e.currentTarget.value)}}
              max={11}
              min={0}
              required
            />
            </div>
            </div>
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
