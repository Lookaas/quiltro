/** @jsx jsx */
import { jsx, css } from '@emotion/core';
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
  canvasFormats: Array<ICanvasFormat>;
  activeCanvasIndex: number;
  canvasMaxHeight: number;
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

export interface ICanvasFormat {
  width: number;
  height: number;
  color: string;
  marginTop: number;
  marginLeft: number;
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
    textColor: '#ffffff',
    canvasFormats: [
      {width: 552, height: 552, color: '#000', marginTop: 0, marginLeft: 0},
      {width: 828, height: 552, color: '#0f0', marginTop: 0, marginLeft: 0},
      {width: 552, height: 828, color: '#0ff', marginTop: 0, marginLeft: 0}
    ],
    activeCanvasIndex: 0,
    canvasMaxHeight: 850
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

  componentDidMount() {
    const width = screen.width - 40;
    const height = screen.height / 2;
    if ( width < 828) {
      this.transformDimensions(width, height);
    }
  }

  transformDimensions = (newWidth: number, newHeight: number) => {
    debugger
    const { canvasFormats } = this.state;
    const transformHeight = (wNew: number, wOld: number, hOld: number) => {
      return wNew*hOld/wOld;
    };
    const transformWidth = (hNew: number, wOld: number, hOld: number) => {
      return hNew*wOld/hOld;
    };
    const newCanvasFormats: Array<ICanvasFormat> = canvasFormats.map((canvasFormat) => {
      let w = transformWidth(newHeight, canvasFormat.width, canvasFormat.height);
      let h = newHeight;
      let marginTop = 0;
      let marginLeft = (newWidth - w) / 2;
      if (canvasFormat.width > canvasFormat.height) {
        w = newWidth;
        h = transformHeight(newWidth, canvasFormat.width, canvasFormat.height);
        marginTop = (newHeight - h) / 2;
        marginLeft = 0;
      }
      return {
        width: w,
        height: h,
        color: canvasFormat.color,
        marginLeft,
        marginTop
      }
    });
    this.setState({
      canvasFormats: newCanvasFormats,
      canvasMaxHeight: newHeight
    });
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

  nextCanvas = () => {
    const { activeCanvasIndex, canvasFormats } = this.state;
    const nextIndex = activeCanvasIndex === canvasFormats.length - 1 ? 0 : activeCanvasIndex + 1;
    this.setState({
      activeCanvasIndex: nextIndex
    })
  }

  previusCanvas = () => {
    const { activeCanvasIndex, canvasFormats } = this.state;
    const prevIndex = activeCanvasIndex === 0 ? canvasFormats.length - 1 : activeCanvasIndex - 1;
    this.setState({
      activeCanvasIndex: prevIndex
    })
  }

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
      textColor,
      canvasFormats,
      activeCanvasIndex,
      canvasMaxHeight
    } = this.state;
    return (
      <div css={pageStyle}>
        <Nav />
        <section data-name="bodycontainer" className="container-fluid" css={containerStyle} >
          <div className="row pt-5">
            <div className="col-md-6 order-first order-md-last"
            css={css`
            @media only screen and (max-width: 992px) {
              position: fixed;
              background: white;
              z-index: 100;
              padding-top: 30px;
              padding-bottom: 20px;
              height: ${canvasMaxHeight + 50}px;
              box-shadow: 0px 10px 18px #888888;
            }`} >
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
                formats={canvasFormats}
                activeIndex={activeCanvasIndex}
                nextCanvas={this.nextCanvas}
                previusCanvas={this.previusCanvas}
                maxHeight={canvasMaxHeight}
              />
            </div>

            <div className="col-md-6 order-last order-md-first"
            css={css`
            @media only screen and (max-width: 992px) {
              padding-top: ${canvasMaxHeight + 60}px;
            }`} >
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

