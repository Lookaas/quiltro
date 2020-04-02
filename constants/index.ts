
export const normalCanvasWidth = 552;

export interface IPosition {
  x: number,
  y: number
}

export interface IChararacteristicsLayerFormat {
  w: number,
  h: number,
  yTitle: number,
  yIcons: number,
  positions : Array<IPosition>
}

export interface IChararacteristicsLayerFormats {
  [description: string] : IChararacteristicsLayerFormat
}

export const characteristicsLayerFormats : IChararacteristicsLayerFormats = {
  '3x2' : {
    w: 184,
    h: 184,
    yTitle: 17,
    yIcons: 46,
    positions : [
      {x: 0, y: 0},
      {x: 63, y: 0},
      {x: 126, y: 0},
      {x: 0, y: 80},
      {x: 63, y: 80},
      {x: 126, y: 80}
    ]
  },
  '3x2-large' : {
    w: 230,
    h: 152,
    yTitle: 9,
    yIcons: 30,
    positions : [
      {x: 0, y: 0},
      {x: 86, y: 0},
      {x: 182, y: 0},
      {x: 0, y: 64},
      {x: 86, y: 64},
      {x: 182, y: 64}
    ]
  },
  '3x2-larger' : {
    w: 322,
    h: 152,
    yTitle: 9,
    yIcons: 30,
    positions : [
      {x: 0, y: 0},
      {x: 132, y: 0},
      {x: 284, y: 0},
      {x: 0, y: 64},
      {x: 132, y: 64},
      {x: 284, y: 64}
    ]
  },
  '2x3' : {
    w: 138,
    h: 345,
    yTitle: 17,
    yIcons: 46,
    positions : [
      {x: 0, y: 0},
      {x: 80, y: 0},
      {x: 0, y: 120.5},
      {x: 80, y: 120.5},
      {x: 0, y: 241},
      {x: 80, y: 241}
    ]
  },
  '1x6' : {
    w: 138,
    h: 414,
    yTitle: 12,
    yIcons: 36,
    positions : [
      {x: 40, y: 0},
      {x: 40, y: 64},
      {x: 40, y: 128},
      {x: 40, y: 192},
      {x: 40, y: 256},
      {x: 40, y: 320}
    ]
  }
}

export const imageScales = {
  vertical: 7 / 12,
  square: 1,
  horizontal: 12 / 7
}

export const imageFormatsLimits = {
  betweenVerticalAndSquare: 0.79,
  betweenSquareAndHorizonatl: 1.35
}
