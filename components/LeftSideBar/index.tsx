/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { Component, FormEvent, RefObject } from 'react';
import ReactGA from 'react-ga';

import { IAdoptionForm, ITextBlockElement } from '../../pages';
import ContactInformation from './ContactInformation';
import PetInformation from './PetInformation';
import SubmitButton from './SubmitButton';
import TextBlocksCreator from './TextBlocksCreator';
import { ITextBlocksConfigPanelState } from './TextBlocksCreator/panel';
import { containerStyle } from './styles'
import { Stage } from 'konva/types/Stage';

export interface ILeftSidebarProps {
  canvasRef: RefObject<Stage>;
  formValues: IAdoptionForm;
  selectedTextBlock: string;
  textBlocks: {
    [id: string]: ITextBlockElement;
  };
  //addTextBlock: () => void;
  addTextBlockWithData: (textBlock: ITextBlockElement) => void;
  onInputChanged: (key: keyof IAdoptionForm, value: any) => void;
  onTextBlockInteracted: (key: string) => void;
  onTextChanged: (key: string, value: string, id: string) => void;
  onImageUploaded: (prop1: HTMLImageElement) => void;
}

export interface ILeftSidebarState {
  isFormValid: boolean;
}

export default class LeftSidebar extends Component<
  ILeftSidebarProps,
  ILeftSidebarState
> {
  state = {
    isFormValid: false
  };

  getDataByKey = (form: IAdoptionForm, key: keyof IAdoptionForm) => {
    return form[key]!.toString();
  }

  getFormData = (): { formData: FormData; formJson: object } => {
    const formData = new FormData();
    const { formValues } = this.props;
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        const element: string = this.getDataByKey(formValues, key as keyof IAdoptionForm);
        formData.append(key, element);
      }
    }
    const imageBlob = this.onExportImageClicked();
    formData.append('image', imageBlob);
    return {
      formData,
      formJson: formValues
    };
  };

  dataURItoBlob = (dataURI: String) => {
    let byteString;
    let mimestring;

    if (dataURI.split(',')[0].indexOf('base64') !== -1) {
      byteString = atob(dataURI.split(',')[1]);
    } else {
      byteString = decodeURI(dataURI.split(',')[1]);
    }
    mimestring = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0];
    const content = new Array();
    for (let i = 0; i < byteString.length; i++) {
      content[i] = byteString.charCodeAt(i);
    }
    return new Blob([new Uint8Array(content)], { type: mimestring });
  };

  onExportImageClicked = () => {
    const imgB64 = this.props.canvasRef.current!.toDataURL({ pixelRatio: 2 });
    const blob = this.dataURItoBlob(imgB64);
    return blob;
  };

  onSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const imgB64 = this.props.canvasRef.current!.getStage().toDataURL({ pixelRatio: 3, quality:1, mimeType: 'image/png', width: 500, height: 750 });
    let link = document.createElement('a');
    link.download = "Test";
    link.href = imgB64;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    /*const { formData, formJson } = this.getFormData();
    const response = await fetch('/api/image', {
      body: formData,
      method: 'POST'
    }).then(r => r.json());

    ReactGA.event({
      action: 'adoption-created',
      category: 'User',
      value: 1,
      ...formJson
    });*/
  };

  onFormChange = (e: FormEvent<HTMLFormElement>) => {
    const isFormValid = e.currentTarget.checkValidity();
    this.setState({
      isFormValid
    });
  };

  render() {
    const {
      onTextChanged,
      formValues,
      onInputChanged,
      onTextBlockInteracted,
      selectedTextBlock,
      textBlocks,
      addTextBlockWithData,
      onImageUploaded
    } = this.props;
    return (
      <form onSubmit={this.onSubmit} onChange={this.onFormChange} css={containerStyle} method="post">
        <PetInformation onChange={onInputChanged} formValues={formValues} addText={addTextBlockWithData} onImageUploaded={onImageUploaded}/>
        <div>
          <ContactInformation onChange={onInputChanged} formValues={formValues} />
          <SubmitButton />
        </div>
      </form>
    );
  }
}
