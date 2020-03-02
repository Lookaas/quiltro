import { css } from '@emotion/core';

export const canvasStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  width: 35rem;
  justify-content: center;
  & .konvajs-content {
    background-color: white;
    border: solid 1px lightgray;
  }
`;

export const testStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
