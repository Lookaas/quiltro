/** @jsx jsx */
import { jsx } from '@emotion/core';
import { KonvaEventObject } from 'konva/types/Node';
import React, { createRef } from 'react';
import { Text, Label, Tag, Group } from 'react-konva';
import { ITextBlocksConfigPanelState } from '../../LeftSideBar/TextBlocksCreator/panel';
import { ITextBlockElement } from '../../../pages'

interface ICanvasText extends ITextBlockElement {
  maxWidth: number;
  maxHeight: number;
  // width: number;
  // height: number;
  onDoubleClick: (evt: KonvaEventObject<MouseEvent>) => void;
  onClick: (evt: KonvaEventObject<MouseEvent>) => void;
  onMouseDown: (evt: KonvaEventObject<MouseEvent>) => void;
  id: string;
}

class CanvasText extends React.Component<ICanvasText, any> {
  static getDerivedStateFromProps(props: any) {
    let stateFontSize = 10;
    const { fontSize } = props;
    if (fontSize === 'small') {
      stateFontSize = 14;
    }
    if (fontSize === 'medium') {
      stateFontSize = 21;
    }
    if (fontSize === 'large') {
      stateFontSize = 35;
    }
    console.log();
    return {
      fontSize: stateFontSize
    };
  }

  state = {
    fontSize: 10
  };

  transformerRef = createRef<any>();

  getNewPosition = (pos: {x: number, y: number}) => {
    const { maxWidth, maxHeight } = this.props;
    const ref = this.transformerRef.current!;

    const topBorder = pos.y;
    const bottomBorder = pos.y + ref.height();
    const leftBorder = pos.x;
    const rightBorder = pos.x + ref.width();

    let x = pos.x;
    let y = pos.y;
    if (topBorder < 0) {
      y = 0;
    } else if (bottomBorder > maxHeight) {
      y = maxHeight - ref.height();
    }

    if (leftBorder < 0) {
      x = 0;
    } else if (rightBorder > maxWidth) {
      x = maxWidth - ref.width();
    }
    return {
      x,
      y
    };
  };

  onTransform = () => {
    const ref = this.transformerRef.current!;
    ref.setAttrs({
      scaleX: 1,
      width: ref.width() * ref.scaleX()
    });
  };

  onDrag = (pos: {x: number, y: number}) => {
    return this.getNewPosition(pos);
  };

  render() {
    const {
      id,
      text,
      color,
      onDoubleClick,
      onClick,
      onMouseDown,
      position,
      align,
      width,
      style
    } = this.props;
    const { fontSize } = this.state;
    return (
      <Group >
      <Label
        x={position.x}
        y={position.y}
        >
        <Tag fill='#fff'/>
        <Text
        padding={10}
        fontSize={fontSize}
        ref={this.transformerRef}
        name={id}
        id={id}
        fill={color}
        text={text}
        transformsEnabled="position"
        dragBoundFunc={this.onDrag}
        onTransform={this.onTransform}
        onClick={onClick}
        onDblClick={onDoubleClick}
        onMouseDown={onMouseDown}
        align={align}
        width={width}
        fontStyle={style}
        // _useStrictMode
        />
      </Label>
      </Group>
    );
  }
}

export default CanvasText;
