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

interface ICanvasCarouselProps {
  canvasFormats: Array<any>;
}

interface ICanvasCarouselState {
  activeIndex: number;
  animating: boolean;
}

class CanvasCarousel extends Component<ICanvasCarouselProps, ICanvasCarouselState> {

  state = {
    activeIndex: 0,
    animating: false
  }

  nextCanvas = () => {
    const { activeIndex, animating } = this.state;
    const { canvasFormats } = this.props;
    if (animating) {
      return;
    }
    const nextIndex = activeIndex === canvasFormats.length - 1 ? 0 : activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    })
  }

  previusCanvas = () => {
    const { activeIndex, animating } = this.state;
    const { canvasFormats } = this.props;
    if (animating) {
      return;
    }
    const prevIndex = activeIndex === 0 ? canvasFormats.length - 1 : activeIndex - 1;
    this.setState({
      activeIndex: prevIndex
    })
  }

  render() {
    const { activeIndex, animating } = this.state;
    const { canvasFormats } = this.props;
    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.nextCanvas}
        previous={this.previusCanvas}
        css={css`
                width: ${canvasFormats[activeIndex].width}px;
                height: ${canvasFormats[activeIndex].height}px;
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
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previusCanvas} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.nextCanvas} />
      </Carousel>
    )
  }

}

export default CanvasCarousel;
