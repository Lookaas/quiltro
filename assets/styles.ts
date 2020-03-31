import { css } from '@emotion/core';

export const containerStyle = css`
  padding-top: 40px;
  @media only screen and (max-width: 992px) {
    padding-top: 0px;
  }
`;

export const pageStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
