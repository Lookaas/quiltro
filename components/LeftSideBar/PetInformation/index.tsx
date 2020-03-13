/** @jsx jsx*/
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
import { fakeRadioGroupStyle, sidebarContainerStyle, fileUpload } from './style';
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
    size: 'm',
    caseOption: '1',
    sex: 'm',
    inputFileRef: createRef<HTMLInputElement>(),
    imageFormat: 'cuadrada'
  };

  onSizeChanged = (e: FormEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    const size = e.currentTarget.value;
    this.setState({ size });
    onChange('pet-size', size);
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
    const yearTag = <Tag>años</Tag>
    const monthTag = <Tag>meses</Tag>
    return (
      <Card elevation={Elevation.ONE} css={sidebarContainerStyle}>
        <H4>Información</H4>
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
          <FormGroup label="Situación*">
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
              label="En adopción"
              value="1"
              inline
            />
            <Radio
              onChange={this.onCaseChanged}
              checked={caseOption === '2'}
              label="Perdida"
              value="2"
              inline
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Edad aproximada*">
            <div style={{display: 'flex', width: '100%'}}>
            <div style={{width: '50%', margin: '2px'}} >
            <InputGroup
              name="edad-mascota"
              value={formValues['age-pet']}
              placeholder="Años"
              rightElement={yearTag}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {onChange('age-pet', e.currentTarget.value)}}
              max={20}
              min={0}
              required
            />
            </div>
            <div style={{width: '50%', margin: '2px'}} >
            <InputGroup
              name="edad-mascota"
              value={formValues['month-age-pet']}
              placeholder="Meses"
              rightElement={monthTag}
              onChange={(e: FormEvent<HTMLInputElement>) : void => {onChange('month-age-pet', e.currentTarget.value)}}
              max={11}
              min={0}
              required
            />
            </div>
            </div>
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Sexo*">
            <Radio
              name="pet-gender"
              value={formValues['pet-gender']}
              onChange={e => onChange('pet-gender', Boolean(sex))}
              checked={Boolean(formValues['pet-gender'])}
              required
              inline
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={e => onChange('pet-gender', '1')}
              checked={formValues['pet-gender'] === '1'}
              label="Macho"
              value="1"
              inline
            />
            <Radio
              onChange={e => onChange('pet-gender', '2')}
              checked={formValues['pet-gender'] === '2'}
              label="Hembra"
              value="2"
              inline
            />
          </FormGroup>
        </div>
        <div>
          <FormGroup label="Tamaño*">
            <Radio
              name="pet-size"
              value={formValues["pet-size"]}
              onChange={e => onChange('pet-size', Boolean(size))}
              checked={Boolean(formValues["pet-size"])}
              required
              css={fakeRadioGroupStyle}
            />
            <Radio
              onChange={e => onChange('pet-size', 's')}
              checked={formValues["pet-size"] === 's'}
              label="Pequeño"
              value="s"
            />
            <Radio
              onChange={e => onChange('pet-size', 'm')}
              checked={formValues["pet-size"] === 'm'}
              label="Mediano"
              value="m"
            />
            <Radio
              onChange={e => onChange('pet-size', 'l')}
              checked={formValues["pet-size"] === 'l'}
              label="Grande"
              value="l"
            />
          </FormGroup>
        </div>
        <div>
          <Checkbox
            name="Esterilizado"
            label="¿Está esterilizado?"
            checked={formValues.sterilized}
            onChange={e => {
              onChange('sterilized', !formValues.sterilized);
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
            name="Vacunas"
            label="¿Tiene las vacunas al día?"
            checked={formValues.vaccines}
            onChange={e => {
              onChange('vaccines', !formValues.vaccines);
            }}
          />
        </div>
      </Card>
    );
  }
}
