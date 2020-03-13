/** @jsx jsx */
import { jsx } from '@emotion/core';
import nanoid from 'nanoid';
import React, { Component, createRef } from 'react';
import Canvas from '../components/canvas';
import LeftSidebar from '../components/LeftSideBar';
import { ICharacteristicElement } from '../components/canvas/CharacteristicsLayer';
import Nav from '../components/Nav';
import { containerStyle, pageStyle } from './styles';
import * as icons from '../assets/icons';
import Konva from 'konva'
import axios from 'axios';

interface IHomeState {
  canvasImage: HTMLImageElement | null;
  canvasTexts: ICanvasTexts;
  formValues: IAdoptionForm;
  characteristics: ICharacteristics;
  canvasHeight: number;
  canvasWidth: number;
  imageFormat: string;
  color: string;
  secundaryColor: string;
  textColor: string;
}

export interface ICanvasTexts {
  selectedTextBlock: string; // TODO: Change this for a string union type
  textBlocks: ITextBlocks
}

interface ICharacteristics {
  [priority: string] : ICharacteristicElement;
}

interface ITextBlocks {
    // TODO: Change keys on this objects also for a string uniion type.
    // (Based on the types of TextBlocksCreator.buttonsKeys )
    [s: string]: ITextBlockElement;
}

export interface ITextBlockElement {
  id: string;
  text: string;
  fontSize: 'small' | 'medium' | 'large';
  color: 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'white';
  position: {
    x: number;
    y: number;
  };
  width?: number;
  align?: 'left' | 'center' | 'right';
  style?: 'normal' | 'bold' |  'italic';
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
    canvasTexts: {
      selectedTextBlock : '',
      textBlocks: {} as ITextBlocks
    },
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
      'caso-mascota': '',
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

  componentDidMount() {
    //this.addTextBlock();
    /*console.log(window.devicePixelRatio);
    const exios = axios.create({
      baseURL: 'https://api.twitter.com/',
    })
    axios.get('https://api.twitter.com/oauth/authorize').then(r => {
      console.log(r);
    }).catch(error => {
      console.error(error);
    })*/
  }

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
          canvasWidth: 1080,
          canvasHeight: 576,
          imageFormat: imageFormat
        });
        break;
    }
  }

  setSelectedTextBlock = (selectedTextBlock: string) => {
    const { canvasTexts } = this.state;
    this.setState({
      canvasTexts: {
        ...canvasTexts,
        selectedTextBlock
      }
    });
  };

  setCanvasImage = (image: HTMLImageElement) => {
    this.setState({
      canvasImage: image
    });
  };

  onTextChanged = (key: string, value: string, id: string) => {
    const { canvasTexts } = this.state;
    const { textBlocks } = canvasTexts;
    this.setState({
      canvasTexts: {
        ...canvasTexts,
        textBlocks: {
          ...textBlocks,
          [id]: {
            ...textBlocks[id],
            [key]: value
          }
        }
      }
    });
  };

  onTextBlockChanged = (id: string, text: string) => {
    const { canvasTexts } = this.state;
    const { textBlocks } = canvasTexts;
    this.setState(
      {
        canvasTexts: {
          ...canvasTexts,
          textBlocks: {
            ...textBlocks,
            [id]: {
              ...textBlocks[id],
              text
            }
          }
        }
      },
      () => {
        console.log(this.state);
      }
    );
  };

  setAdoptionFormField = (key: keyof IAdoptionForm, value: any) => {
    const { canvasTexts, canvasHeight, canvasWidth, characteristics, formValues } = this.state;
    const { textBlocks } = canvasTexts;
    const actualCharacteristics: ICharacteristics = characteristics;
    let size = 'Pequeño';
    let newTextBlock: ITextBlockElement = {
      id: key,
      color: 'black',
      text: value,
      fontSize: 'medium',
      position: {x: 0, y: 0}
    }
    let characteristic: ICharacteristicElement = {
      priority: '',
      text: '',
      icon: {path: '', w: -1, h:-1},
      scale: -1
    }
    let validator: '' | 'textBlock' | 'characteristic' | 'deletedCharacteristic'= '';
    switch (key) {
      case 'nombre-mascota' :
        newTextBlock.align = 'center';
        newTextBlock.width = canvasWidth;
        newTextBlock.position.y = canvasHeight*0.1;
        newTextBlock.style = 'bold';
        newTextBlock.fontSize = 'large';
        validator = 'textBlock';
        break;
      case 'caso-mascota' :
        newTextBlock.align = 'center';
        newTextBlock.width = canvasWidth;
        newTextBlock.position.y = canvasHeight*0.2;
        newTextBlock.text = value === '1' ? "En adopción" : 'Perdido';
        validator = 'textBlock';
        break;
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
            text: 'sterilized',
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
      /*case 'contact-name':
        newTextBlock.fontSize = 'small';
        newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7};
        validator = 'textBlock';
        break;
      case 'contact-phone':
        if (value.length < 4) {
          value = '+56 ';
        }
        newTextBlock.fontSize = 'small';
        newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7 + 30};
        validator = 'textBlock';
        break;
        case 'contact-email':
          newTextBlock.fontSize = 'small';
          newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7 + 60};
          validator = 'textBlock';
          break;
        case 'contact-city':
          newTextBlock.fontSize = 'small';
          newTextBlock.position = {x: canvasWidth*0.8, y: canvasHeight*0.7 + 90};
          validator = 'textBlock';
          break;
      */
        default:

    }
    if(validator === 'textBlock') {
      this.setState({
        formValues: {
          ...this.state.formValues,
          [key]: value
        },
        canvasTexts: {
          ...canvasTexts,
          textBlocks: {
            ...textBlocks,
            [key]: newTextBlock
          }
        }
      });
    }
    else if (validator === 'characteristic') {
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
  };

  deleteCharacteristic = (characPriority: string) => {
    const { characteristics } = this.state;
    const actualCharacteristics: ICharacteristics = characteristics;
    const updatePriority: ICharacteristics = {};
    Object.keys(characteristics).forEach(priority => {
      if (priority !== characPriority) {
        updatePriority[priority] = actualCharacteristics[priority];
      }
    })
  }

  /*addTextBlock = () => {
    const { canvasTexts } = this.state;
    const { textBlocks } = canvasTexts;

    const id = nanoid();
    const newTextblock: ITextBlockElement = {
      color: 'black',
      fontSize: 'medium',
      id,
      text: ''
    };

    this.setState({
      canvasTexts: {
        ...canvasTexts,
        textBlocks: {
          ...textBlocks,
          [id]: newTextblock
        }
      }
    });
  };*/

  addTextBlockWithData = (newTextblock: ITextBlockElement) => {
    const { canvasTexts } = this.state;
    const { textBlocks } = canvasTexts;
    const id = newTextblock.id;
    this.setState({
      canvasTexts: {
        ...canvasTexts,
        textBlocks: {
          ...textBlocks,
          [id]: newTextblock
        }
      }
    });
  };

  render() {
    const { canvasImage, canvasTexts, formValues, canvasHeight, canvasWidth, characteristics, imageFormat, color, secundaryColor, textColor } = this.state;
    const { selectedTextBlock, textBlocks } = canvasTexts;
    return (
      <div css={pageStyle}>
        <Nav />
        <section data-name="bodycontainer" css={containerStyle}>
          <LeftSidebar
            canvasRef={this.stageRef}
            formValues={formValues}
            onTextBlockInteracted={this.setSelectedTextBlock}
            selectedTextBlock={selectedTextBlock}
            textBlocks={textBlocks}
            onInputChanged={this.setAdoptionFormField}
            onTextChanged={this.onTextChanged}
            addTextBlockWithData={this.addTextBlockWithData}
            onImageUploaded={this.setCanvasImage}
            changeDimensions={this.changeDimensions}
          />
          <Canvas
            canvasRef={this.stageRef}
            canvasTexts={canvasTexts}
            currentCanvasText={textBlocks[selectedTextBlock]}
            image={canvasImage}
            onRef={this.stageRef}
            onTextChanged={this.onTextBlockChanged}
            onTextBlockSelected={this.setSelectedTextBlock}
            canvasHeight={canvasHeight}
            canvasWidth={canvasWidth}
            characteristics={characteristics}
            formData={formValues}
            imageFormat={imageFormat}
            color={color}
            secundaryColor={secundaryColor}
            textColor={textColor}
          />

        </section>
      </div>
    );
  }
}

export default Home;

