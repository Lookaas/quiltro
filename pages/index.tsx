/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Component, createRef } from 'react';
import Canvas from '../components/canvas';
import LeftSidebar from '../components/LeftSideBar';
import { ICharacteristicElement } from '../components/canvas/CharacteristicsLayer';
import Nav from '../components/Nav';
import { containerStyle, pageStyle } from '../assets/styles';
import * as icons from '../assets/icons';

interface IHomeState {
  canvasImage: HTMLImageElement | null;
  formValues: IAdoptionForm;
  characteristics: ICharacteristics;
  canvasHeight: number;
  canvasWidth: number;
  imageFormat: string;
  color: string;
  secundaryColor: string;
  textColor: string;
}

interface ICharacteristics {
  [priority: string] : ICharacteristicElement;
}

export interface IAdoptionForm {
  'nombre-mascota': string;
  'contact-name': string;
  'contact-phone': string;
  'whatsapp-contacto': string;
  'contact-email': string;
  'sterilized': boolean;
  'chip': boolean;
  'vaccines': boolean;
  'edad-mascota': string;
  'informacion-extra-mascota'?: string;
  'pet-size': string;
  'caso-mascota': string;
  'contact-city': string;
  'pet-gender': string;
  'age-pet': string;
  'month-age-pet': string;
}

class Home extends Component<any, IHomeState> {
  state = {
    canvasImage: null,
    formValues: {
      chip: false,
      'edad-mascota': '',
      'contact-email': '',
      sterilized: false,
      'informacion-extra-mascota': '',
      'contact-name': '',
      'nombre-mascota': '',
      'pet-size': '',
      'contact-phone': '+56 ',
      vaccines: false,
      'whatsapp-contacto': '',
      'caso-mascota': '1',
      'contact-city': '',
      'pet-gender': '',
      'age-pet': '',
      'month-age-pet': ''
    },
    characteristics: {},
    canvasHeight: 540,
    canvasWidth: 540,
    imageFormat: 'cuadrada',
    color: '#62bfa2',
    secundaryColor: '#51947f',
    textColor: '#ffffff'
  };

  stageRef = createRef<any>();

  changeDimensions = (imageFormat : string) => {
    switch (imageFormat) {
      case 'vertical' :
        this.setState({
          canvasWidth: 540,
          canvasHeight: 675,
          imageFormat: imageFormat
        });
        break;
      case 'cuadrada' :
        this.setState({
          canvasWidth: 540,
          canvasHeight: 540,
          imageFormat: imageFormat
        });
        break;
      case 'horizontal' :
        this.setState({
          canvasWidth: 600,
          canvasHeight: 432,
          imageFormat: imageFormat
        });
        break;
    }
  }

  setCanvasImage = (image: HTMLImageElement) => {
    this.setState({
      canvasImage: image
    });
  };

  setAdoptionFormField = (key: keyof IAdoptionForm, value: any) => {
    const { characteristics, formValues } = this.state;
    const actualCharacteristics: ICharacteristics = characteristics;
    let size = 'Pequeño';
    let characteristic: ICharacteristicElement = {
      priority: '',
      text: '',
      icon: {path: '', w: -1, h:-1},
      scale: -1
    }
    let validator: ''  | 'characteristic' | 'deletedCharacteristic'= '';
    switch (key) {
      case 'age-pet' :
        if (isNaN(value) && value !== '0') {
          value = formValues['age-pet'];
        }
        else {
          const months = formValues['month-age-pet'];
          let ageString = '';
          let yearTextAux = '';
          let monthTextAux = '';
          if (value !== '' && months !== '' && value !== '0' && months !== '0') {
            yearTextAux = parseInt(value, 10) > 1 ? ' años ' : ' año ';
            monthTextAux = parseInt(months, 10) > 1 ? ' meses ' : ' mes ';
            ageString = value + yearTextAux + '\n' + months + monthTextAux;
          }
          else if (value !== '' && value !== '0') {
            yearTextAux = parseInt(value, 10) > 1 ? ' años' : ' año';
            ageString = value + yearTextAux;
          }
          else if (months !== '' && months !== '0') {
            monthTextAux = parseInt(months, 10) > 1 ? ' meses' : ' mes';
            ageString = months + monthTextAux;
          }
          characteristic = {
            priority: '0',
            icon: icons.birthday_cake,
            text: ageString,
            scale: 0.05
          }
          validator = 'characteristic';
        }
        break;
      case 'month-age-pet' :
        if (isNaN(value) && value !== '0') {
          value = formValues['month-age-pet'];
        }
        else {
          const year = formValues['age-pet'];
          let ageString2 = ''
          let yearTextAux = '';
          let monthTextAux = '';
          if (value !== '' && year !== '' && value !== '0' && year !== '0') {
            yearTextAux = parseInt(year, 10) > 1 ? ' años ' : ' año ';
            monthTextAux = parseInt(value, 10) > 1 ? ' meses ' : ' mes ';
            ageString2 = year + yearTextAux + '\n' + value + monthTextAux;
          }
          else if (value !== '' && value !== '0') {
            monthTextAux = parseInt(value, 10) > 1 ? ' meses' : ' mes';
            ageString2 = value + monthTextAux;
          }
          else if (year !== '' && year !== '0') {
            yearTextAux = parseInt(year, 10) > 1 ? ' años' : ' año';
            ageString2 = year + yearTextAux;
          }
          characteristic = {
            priority: '0',
            icon: icons.birthday_cake,
            text: ageString2,
            scale: 0.08
          }
          validator = 'characteristic';
        }
        break;
      case 'pet-gender' :
        characteristic = {
          priority: '1',
          icon: value === '1' ? icons.mars : icons.venus,
          text: value === '1' ? 'Macho' : 'Hembra',
          scale: 0.08
        }
        validator = 'characteristic';
        break;
      case 'pet-size' :
        size = 'Pequeño';
        if( value === 'm' ) size = 'Mediano';
        if( value !== 'm' &&  value !== 's' ) size = 'Grande';
        characteristic = {
          priority: '3',
          icon: icons.dog,
          text: size,
          scale:  value === 's' ? 0.04 : value === 'm' ? 0.06 : 0.08
        }
        validator = 'characteristic';
        break;
      case 'sterilized' :
        if(value) {
          characteristic = {
            priority: '4',
            icon: icons.band_aid,
            text: 'Esterilizado',
            scale: 0.08
          }
          validator = 'characteristic';
        }
        else {
          delete actualCharacteristics['4'];
          validator = 'deletedCharacteristic';
        }
        break;
      case 'chip' :
        if(value) {
          characteristic = {
            priority: '5',
            icon: icons.paw,
            text: 'Con chip',
            scale: 0.08
          }
          validator = 'characteristic';
        }
        else {
          delete actualCharacteristics['5'];
          validator = 'deletedCharacteristic';
        }
        break;
      case 'vaccines' :
        if(value) {
          characteristic = {
            priority: '6',
            icon: icons.syringe,
            text: 'Al día',
            scale: 0.08
          }
          validator = 'characteristic';
        }
        else {
          delete actualCharacteristics['6'];
          validator = 'deletedCharacteristic';
        }
        break;
      case 'contact-phone':
        if (value.length < 4) {
          value = '+56 ';
        }
        else if (isNaN(value.slice(4).trim())) {
          value = formValues['contact-phone'];
        }
        break;
        default:
          //do nothing~

    }
    if (validator === 'characteristic') {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [key]: value
        },
        characteristics: {
          ...characteristics,
          [characteristic.priority]: characteristic
        }
      });
    }
    else if (validator = 'deletedCharacteristic') {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [key]: value
        },
        characteristics: actualCharacteristics
      });
    }
    else {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [key]: value
        }
      });
    }
  };

  render() {
    const {
      canvasImage,
      formValues,
      canvasHeight,
      canvasWidth,
      characteristics,
      imageFormat,
      color,
      secundaryColor,
      textColor
    } = this.state;
    return (
      <div css={pageStyle}>
        <Nav />
        <section data-name="bodycontainer" className="container">
          <div className="row pt-5">
            <div className="col-md-6 order-first order-md-last">
              <Canvas
                canvasRef={this.stageRef}
                image={canvasImage}
                onRef={this.stageRef}
                canvasHeight={canvasHeight}
                canvasWidth={canvasWidth}
                characteristics={characteristics}
                formData={formValues}
                imageFormat={imageFormat}
                color={color}
                secundaryColor={secundaryColor}
                textColor={textColor}
              />
            </div>

            <div className="col-md-6 order-last order-md-first">
              <LeftSidebar
                canvasRef={this.stageRef}
                formValues={formValues}
                onInputChanged={this.setAdoptionFormField}
                onImageUploaded={this.setCanvasImage}
                changeDimensions={this.changeDimensions}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

