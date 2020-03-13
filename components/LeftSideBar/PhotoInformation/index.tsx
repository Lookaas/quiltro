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

export interface IPhotoInformationProps {
  onChange: (key: keyof IAdoptionForm, value: any) => void;
  addText: (textBlock: ITextBlockElement) => void;
  onImageUploaded: (prop1: HTMLImageElement) => void;
  changeDimensions: (imageFormat: string) => void;
  formValues: IAdoptionForm;
}

export default class PhotoInformation extends React.Component<
  IPhotoInformationProps,
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
        <H4>Fotografía</H4>
        <div>
          <FormGroup label="Imagen*">
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
            label='Formato*'
            onChange={this.onChangeDimensions}
            selectedValue={imageFormat} >
              <Radio label='Cuadrada' value='cuadrada' />
              <Radio label='Vertical' value='vertical' />
              <Radio label='Horizontal' value='horizontal' />
            </RadioGroup>
        </div>
      </Card>
    );
  }
}
