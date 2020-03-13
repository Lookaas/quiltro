import { css } from '@emotion/core';

export const canvasStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  justify-content: center;
  & .konvajs-content {
    background-color: #51947f;
    border: solid 1px lightgray;
  }
`;

export const testStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`
