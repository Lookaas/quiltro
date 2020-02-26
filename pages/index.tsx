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

interface IHomeState {
  canvasImage: HTMLImageElement | null;
  canvasTexts: ICanvasTexts;
  formValues: IAdoptionForm;
  characteristics: ICharacteristics;
  canvasHeight: number;
  canvasWidth: number;
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
  'nombre-contacto': string;
  'telefono-contacto': string;
  'whatsapp-contacto': string;
  'email-contacto': string;
  'esterilizado': boolean;
  'chip': boolean;
  'vacunas': boolean;
  'edad-mascota': string;
  'informacion-extra-mascota'?: string;
  'tamaño-mascota': string;
  'caso-mascota': string;
  'ciudad-contacto': string;
  'sexo-mascota': string;
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
      'email-contacto': '',
      esterilizado: false,
      'informacion-extra-mascota': '',
      'nombre-contacto': '',
      'nombre-mascota': '',
      'tamaño-mascota': '',
      'telefono-contacto': '',
      vacunas: false,
      'whatsapp-contacto': '',
      'caso-mascota': '',
      'ciudad-contacto': '',
      'sexo-mascota': ''
    },
    characteristics: {},
    canvasHeight: 750,
    canvasWidth: 500,
  };

  stageRef = createRef<any>();

  componentDidMount() {
    //this.addTextBlock();
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
    const { canvasTexts, canvasHeight, canvasWidth, characteristics } = this.state;
    const { textBlocks } = canvasTexts;
    const actualCharacteristics: ICharacteristics = characteristics;
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
      icon: ''
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
      case 'edad-mascota' :
        characteristic = {
          priority: '0',
          icon: icons.birthday_cake,
          text: value
        }
        validator = 'characteristic';
        break;
      case 'sexo-mascota' :
        characteristic = {
          priority: '1',
          icon: value === '1' ? icons.mars : icons.venus,
          text: value === '1' ? 'Macho' : 'Hembra'
        }
        validator = 'characteristic';
        break;
      case 'tamaño-mascota' :
        characteristic = {
          priority: '3',
          icon: icons.dog,
          text: value === 's' ? 'Pequeño' : value === 'm' ? 'Mediano' : 'Grande'
        }
        validator = 'characteristic';
        break;
      case 'esterilizado' :
        if(value) {
          characteristic = {
            priority: '4',
            icon: icons.band_aid,
            text: 'Esterilizado'
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
            text: 'Con chip'
          }
          validator = 'characteristic';
        }
        else {
          delete actualCharacteristics['5'];
          validator = 'deletedCharacteristic';
        }
        break;
      case 'vacunas' :
        if(value) {
          characteristic = {
            priority: '6',
            icon: icons.syringe,
            text: 'Al día'
          }
          validator = 'characteristic';
        }
        else {
          delete actualCharacteristics['6'];
          validator = 'deletedCharacteristic';
        }
        break;

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
    const { canvasImage, canvasTexts, formValues, canvasHeight, canvasWidth, characteristics } = this.state;
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
          />
        </section>
      </div>
    );
  }
}

export default Home;

