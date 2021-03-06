/** @jsx jsx */
import { Card, Elevation } from '@blueprintjs/core';
import { jsx, css } from '@emotion/core';
import { Component,  RefObject } from 'react';
import { Layer, Stage, Text, Label, Tag, Rect, Group } from 'react-konva';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Container
} from 'reactstrap';

import { IAdoptionForm, ICanvasFormat } from '../../pages';
import CanvasImage from './canvasImage';
import BackgroundImage from './BackgroundImage';
import CharacteristicsLayer, { ICharacteristicElement } from './CharacteristicsLayer';
import ContactLayer from './ContactLayer';
import CanvasCarousel from './CanvasCarousel';
import { imageFormatsLimits, imageScales } from '../../constants';

interface IAppProps {
  onRef: RefObject<any>;
  canvasRef: RefObject<any>;
  image: HTMLImageElement | null;
  canvasHeight: number;
  canvasWidth: number;
  characteristics: {
    [priority: string] : ICharacteristicElement
  },
  formData: IAdoptionForm;
  imageFormat: string;
  color: string;
  secundaryColor: string;
  textColor: string;
  formats: Array<ICanvasFormat>;
  activeIndex: number;
  nextCanvas: () => void;
  previusCanvas: () => void;
  maxHeight: number;
}

interface IAppState {
  backgroundImage: HTMLImageElement | null;
}
class Canvas extends Component<IAppProps, IAppState> {
  state = {
    backgroundImage: null
  };


  resizeImageHeight = (img: HTMLImageElement, newHeight: number, newWidth: number): Promise<HTMLImageElement> => {
    const canvas = document.createElement('canvas');
    canvas.height = newHeight;
    canvas.width = newWidth;
    const ctx = canvas.getContext('2d');
    if (!ctx) {
      return Promise.resolve(img);
    }
    return new Promise((resolve, reject) => {
      ctx.drawImage(img, 0, 0);
      ctx.drawImage(img, 0, 0, newWidth, newHeight);
      const dataurl = canvas.toDataURL('image/png');

      const newImage = new Image();
      newImage.src = dataurl;
      newImage.addEventListener('load', () => {
        resolve(newImage);
      });
      newImage.addEventListener('error', () => {
        reject(img);
      });
    });
  };

  getResizedImage = (image: HTMLImageElement) => {
    const { height, width } = image;
    const { canvasHeight, canvasWidth } = this.props;
    let imageHeight = height;
    let imageWidth = width;
    // Resize to go over the canvas height
    imageWidth = imageWidth * (canvasHeight / imageHeight);
    imageHeight = canvasHeight;

    // Resize to go over the canvas width
    if (canvasWidth > imageWidth) {
      imageHeight = imageHeight * (canvasWidth / imageWidth);
      imageWidth = canvasWidth;
    }
    return this.resizeImageHeight(image, imageHeight, imageWidth);
  };

  async componentDidUpdate(prevProps: any) {
    const { image } = this.props;
    if (image && image !== prevProps.image) {
      const backgroundImage = await this.getResizedImage(image);
      this.setState({ backgroundImage });
    }
  }

  render() {
    const {
      backgroundImage
    } = this.state;
    const {
      onRef,
      canvasHeight,
      canvasWidth,
      characteristics,
      formData,
      imageFormat,
      color,
      secundaryColor,
      textColor,
      image,
      formats,
      activeIndex,
      nextCanvas,
      previusCanvas,
      maxHeight
    } = this.props;
    const canvasStyle = css`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem;
      justify-content: center;
      & .konvajs-content {
        background-color: ${color};
        border: solid 1px lightgray;
      }
    `;
    let yLabels = 0;
    let textX = 0, textY=0, textWidth=canvasWidth;
    if (imageFormat === 'cuadrada') {
      yLabels = 0.5*canvasHeight;
    }
    else if (imageFormat === 'horizontal') {
      textX = canvasWidth*0.5;
      textWidth = canvasWidth*0.5;
    }
    return (
      <div>
        <Carousel
        activeIndex={activeIndex}
        next={nextCanvas}
        previous={previusCanvas}
        interval={false}
        css={css`
                width: ${formats[activeIndex].width}px;
                height: ${formats[activeIndex].height}px;
                margin-top: ${formats[activeIndex].marginTop}px;
                margin-left: ${formats[activeIndex].marginLeft}px;
              `} >
        {formats.map((canvasFormat: ICanvasFormat, index) => (
          <CarouselItem key={index}>
            <Container css={css`
                width: ${canvasFormat.width}px;
                height: ${canvasFormat.height}px;
              `}>
              <CanvasImage
              onRef={canvasFormat.ref}
              canvasHeight={canvasFormat.height}
              canvasWidth={canvasFormat.width}
              characteristics={characteristics}
              formData={formData}
              color={color}
              textColor={textColor}
              image={image}
              backgroundImage={backgroundImage}
              canvasType={canvasFormat.id}
              />
            </Container>
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previusCanvas} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={nextCanvas} />
      </Carousel>
        {/*process.browser && (
          <Stage
            ref={onRef}
            width={canvasWidth}
            height={canvasHeight}
          >
            <Layer>
              <Rect width={canvasWidth} height={canvasHeight} fill={color} />
            </Layer>
            {
              backgroundImage !== null ?
              <BackgroundImage
              backgroundImage={backgroundImage}
              canvasHeight={canvasHeight}
              canvasWidth={canvasWidth}
              imageFormat={imageFormat} />
              :
              <Layer>
                <Rect width={canvasWidth} height={280} fill='#efefef' />
              </Layer>
            }

            <Layer>
            <Group x={textX} y={textY} width={textWidth} height={canvasHeight} >
              <Group y={yLabels}>
              <Label
              x={0}
              y={canvasHeight*0.05}
              >
              <Tag fill={color} />
              <Text
              fill={textColor}
              padding={10}
              fontSize={35}
              text={formData['nombre-mascota'] !== '' ? formData['nombre-mascota'] : 'Nombre mascota'}
              align={'center'}
              width={textWidth}
              fontStyle={'bold'}
              // _useStrictMode
              />
            </Label>
            <Label
              x={0}
              y={canvasHeight*0.15}
              >
              <Tag fill={color} />
              <Text
              fill={textColor}
              padding={10}
              fontSize={22}
              text={formData['caso-mascota'] !== '' ? (formData['caso-mascota'] === '1' ? "En adopción" : 'Perdido') : 'Caso mascota'}
              align={'center'}
              width={textWidth}
              // _useStrictMode
              />
            </Label>
              </Group>

              <CharacteristicsLayer
                canvasHeight={canvasHeight}
                canvasWidth={textWidth}
                characteristics={characteristics}
                color={color}
                textColor={textColor}
                imageFormat={imageFormat} />

              <ContactLayer
                canvasHeight={canvasHeight}
                canvasWidth={textWidth}
                formData={formData}
                color={color}
                textColor={textColor}
                imageFormat={imageFormat}
                textStyle={image !== null && image.width === image.height && canvasHeight === canvasWidth}
              />

              <Label
              y={canvasHeight*0.95} >
                <Tag fill={secundaryColor} />
                <Text
                fill={textColor}
                  padding={10}
                  width={textWidth}
                  text='difunde.quiltroschile.cl'
                  fontSize={12}
                  align='center' />
              </Label>
              </Group>
            </Layer>
          </Stage>
          )
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
                <div className='container'>
                <Stage
                  width={canvasWidth}
                  height={canvasHeight}
                >
                  <Layer>
                    <Rect width={canvasWidth} height={canvasHeight} fill={color} />
                  </Layer>
                </Stage>
                </div>
            </div>
            <div className="carousel-item">
                <div className='container'>
                <Stage
                  width={canvasWidth}
                  height={canvasHeight}
                >
                  <Layer>
                    <Rect width={canvasWidth} height={canvasHeight} fill={'#fff'} />
                  </Layer>
                </Stage>
                </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
        </div>*/}
      </div>
    );
  }
}

export default Canvas;
