/*
  Funcioón que hace la regla de tres para obtener una nueva variable con la proporción adecuada

    dOld1 --> dOld2
    dNew --> x

  x sería el valor retornado
*/

export const transformDimension = (dNew: number, dOld1: number, dOld2: number) => {
  return dNew*dOld2/dOld1;
};
