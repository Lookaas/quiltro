/** @jsx jsx*/
import {
  Card,
  Elevation,
  FormGroup,
  H4,
  Radio,
  Button,
  RadioGroup
} from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { FormEvent, createRef } from 'react';
import { fileUpload, positionLabel1, buttonStyle } from './style';

export interface IPhotoInformationProps {
  onImageUploaded: (prop1: HTMLImageElement) => void;
  changeDimensions: (imageFormat: string) => void;
}

export default class PhotoInformation extends React.Component<
  IPhotoInformationProps,
  any
> {
  state = {
    inputFileRef: createRef<HTMLInputElement>(),
    imageFormat: 'cuadrada'
  };

  openFile = () => {
    this.state.inputFileRef.current!.click();
  };

  loadImageOntoReader = (event: ProgressEvent<FileReader>) => {
    const {onImageUploaded} = this.props;
    const img = new Image();
    img.src = event.target!.result as string;
    img.addEventListener('load', () => {
      onImageUploaded(img);
    });
  };

  onFileUploaded = (e: FormEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = this.loadImageOntoReader;
    const file : File = e.currentTarget.files![0];
    if (!file) {
      console.error('!file', file, e);
      return
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
    const { inputFileRef, imageFormat } = this.state;
    return (
      <Card elevation={Elevation.ONE}>
        <H4 className="text-left">Fotografía</H4>
        <label className="position-absolute" css={positionLabel1}>1</label>
        <div>
          <FormGroup label="Imagen*">
            <Button
              intent="primary"
              rightIcon="upload"
              text="Subir Imagen"
              outlined={true}
              onClick={this.openFile}
              css={buttonStyle}
            />
            <input
              ref={inputFileRef}
              onChange={this.onFileUploaded}
              type="file"
              css={fileUpload}
            />
          </FormGroup>
        </div>
        {/*<div>
          <RadioGroup
            label='Formato*'
            onChange={this.onChangeDimensions}
            selectedValue={imageFormat} >
            <Radio label='Cuadrada' value='cuadrada' />
            <Radio label='Vertical' value='vertical' />
            <Radio label='Horizontal' value='horizontal' />
          </RadioGroup>
        </div>*/}
      </Card>
    );
  }
}
