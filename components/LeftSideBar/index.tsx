/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component, FormEvent, RefObject } from 'react';
import axios from 'axios';

import { IAdoptionForm} from '../../pages';
import ContactInformation from './ContactInformation';
import PhotoInformation from './PhotoInformation';
import PetInformation from './PetInformation';
import SubmitButton from './SubmitButton';
import { containerStyle } from './styles'
import { Stage } from 'konva/types/Stage';
import { ICanvasFormat } from '../../pages';
import { normalCanvasWidth } from '../../constants';
import { transformDimension } from '../../utils';


export interface ILeftSidebarProps {
  canvasformats: Array<ICanvasFormat>;
  formValues: IAdoptionForm;
  onInputChanged: (key: keyof IAdoptionForm, value: any) => void;
  onImageUploaded: (prop1: HTMLImageElement) => void;
  changeDimensions: (imageFormat: string) => void;
}

export interface ILeftSidebarState {
  isFormValid: boolean;
  imageLoadedUrl: string;
}

export default class LeftSidebar extends Component<
  ILeftSidebarProps,
  ILeftSidebarState
> {
  state = {
    isFormValid: false,
    imageLoadedUrl: ''
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

  loadToS3 = (file: Blob, filename: string) => {
    axios.post("http://localhost:3000/testS3",{
      fileName : filename,
      fileType : 'png'
    })
    .then(response => {
      var returnData = response.data.data.returnData;
      var signedRequest = returnData.signedRequest;
      var url = returnData.url;
      console.log("Recieved a signed request " + signedRequest);

     // Put the fileType in the headers for the upload
      var options = {
        headers: {
          'Content-Type': 'png'
        }
      };
      axios.put(signedRequest,file,options)
      .then(result => {
        console.log("Response from s3")
        console.log(url);
      })
      .catch(error => {
        console.error(error);
      })
    })
    .catch(error => {
      console.error(error);
    })
  }

  onSubmit = async (e: FormEvent) => {
    const {formValues, canvasformats} = this.props;
    e.preventDefault();

    canvasformats.forEach((canvasFormat: ICanvasFormat) => {
      let pixelRatio = 2;
      if (canvasFormat.width < normalCanvasWidth) {
        pixelRatio = transformDimension(canvasFormat.width, normalCanvasWidth, 2);
      }
      const canvasRef = canvasFormat.ref;
      const imgB64 = canvasRef.current!.getStage().toDataURL({ pixelRatio: pixelRatio });
      let link = document.createElement('a');
      link.download = formValues['nombre-mascota']+"-"+canvasFormat.id;
      link.href = imgB64;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      const imageBlob = this.dataURItoBlob(imgB64);
      //this.loadToS3(imageBlob, formValues['nombre-mascota']);
    })
  };

  onFormChange = (e: FormEvent<HTMLFormElement>) => {
    const isFormValid = e.currentTarget.checkValidity();
    this.setState({
      isFormValid
    });
  };

  render() {
    const {
      formValues,
      onInputChanged,
      onImageUploaded,
      changeDimensions
    } = this.props;
    return (
      <form onSubmit={this.onSubmit} onChange={this.onFormChange} css={containerStyle} method="post">
        <div className="row">
          <div className="col-md-6">
            <PhotoInformation onImageUploaded={onImageUploaded} changeDimensions={changeDimensions}/>
            <ContactInformation onChange={onInputChanged} formValues={formValues} />
          </div>
          <div className="col-md-6">
            <PetInformation onChange={onInputChanged} formValues={formValues} />
            <SubmitButton />
          </div>
        </div>
      </form>
    );
  }
}
