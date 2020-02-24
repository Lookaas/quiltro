/** @jsx jsx */
import { jsx } from '@emotion/core';
import nanoid from 'nanoid';
import React, { Component, createRef } from 'react';
import Canvas from '../components/canvas';
import LeftSidebar from '../components/LeftSideBar';
import { ITextBlocksConfigPanelState } from '../components/LeftSideBar/TextBlocksCreator/panel';
import Nav from '../components/Nav';
import { containerStyle, pageStyle } from './styles'

interface IHomeState {
  canvasImage: HTMLImageElement | null;
  canvasTexts: ICanvasTexts;
  formValues: IAdoptionForm;
}

export interface ICanvasTexts {
  selectedTextBlock: string; // TODO: Change this for a string union type
  textBlocks: ITextBlocks
}

interface ITextBlocks {
    // TODO: Change keys on this objects also for a string uniion type.
    // (Based on the types of TextBlocksCreator.buttonsKeys )
    [s: string]: ITextBlocksConfigPanelState;
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
    }
  };

  stageRef = createRef<any>();

  componentDidMount() {
    this.addTextBlock();
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
    this.setState({
      formValues: {
        ...this.state.formValues,
        [key]: value
      }
    });
  };

  addTextBlock = () => {
    const { canvasTexts } = this.state;
    const { textBlocks } = canvasTexts;

    const id = nanoid();
    const newTextblock: ITextBlocksConfigPanelState = {
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
  };

  addTextBlockWithData = (id: string, text: string) => {
    const { canvasTexts } = this.state;
    const { textBlocks } = canvasTexts;

    const newTextblock: ITextBlocksConfigPanelState = {
      color: 'black',
      fontSize: 'medium',
      id,
      text
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
  };

  render() {
    const { canvasImage, canvasTexts, formValues } = this.state;
    const { selectedTextBlock, textBlocks } = canvasTexts;

    return (
      <div css={pageStyle}>
        <Nav onImageUploaded={this.setCanvasImage} />
        <section data-name="bodycontainer" css={containerStyle}>
          <LeftSidebar
            addTextBlock={this.addTextBlock}
            canvasRef={this.stageRef}
            formValues={formValues}
            onTextBlockInteracted={this.setSelectedTextBlock}
            selectedTextBlock={selectedTextBlock}
            textBlocks={textBlocks}
            onInputChanged={this.setAdoptionFormField}
            onTextChanged={this.onTextChanged}
            addTextBlockWithData={this.addTextBlockWithData}
          />
          <Canvas
            canvasRef={this.stageRef}
            canvasTexts={canvasTexts}
            currentCanvasText={textBlocks[selectedTextBlock]}
            image={canvasImage}
            onRef={this.stageRef}
            onTextChanged={this.onTextBlockChanged}
            onTextBlockSelected={this.setSelectedTextBlock}
          />
        </section>
      </div>
    );
  }
}

export default Home;

