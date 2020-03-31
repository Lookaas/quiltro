/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import {Component} from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  Container
} from 'reactstrap';
import { Stage, Layer, Rect } from 'react-konva';

import { ICanvasFormat } from '../../../pages'

interface ICanvasCarouselProps {
  canvasFormats: Array<ICanvasFormat>;
  activeIndex: number;
  nextCanvas: () => void;
  previusCanvas: () => void;
  maxHeight: number;
}

interface ICanvasCarouselState {
  animating: boolean;
}

class CanvasCarousel extends Component<ICanvasCarouselProps, ICanvasCarouselState> {

  state = {
    animating: false
  }

  render() {
    const { canvasFormats, nextCanvas, previusCanvas, activeIndex, maxHeight } = this.props;
    return (
      <Carousel
        activeIndex={activeIndex}
        next={nextCanvas}
        previous={previusCanvas}
        interval={false}
        css={css`
                width: ${canvasFormats[activeIndex].width}px;
                height: ${canvasFormats[activeIndex].height}px;
                margin-top: ${canvasFormats[activeIndex].marginTop}px;
                margin-left: ${canvasFormats[activeIndex].marginLeft}px;
              `} >
        {canvasFormats.map((canvasFormat: any, index) => (
          <CarouselItem key={index}>
            <Container css={css`
                width: ${canvasFormat.width}px;
                height: ${canvasFormat.height}px;
              `}>
              <Stage
                width={canvasFormat.width}
                height={canvasFormat.height}
              >
                <Layer>
                  <Rect width={canvasFormat.width} height={canvasFormat.height} fill={canvasFormat.color} />
                </Layer>
              </Stage>
            </Container>
          </CarouselItem>
        ))}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previusCanvas} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={nextCanvas} />
      </Carousel>
    )
  }

}

export default CanvasCarousel;
