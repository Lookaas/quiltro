/** @jsx jsx */
import { Button } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from 'react';
import { btnDefault } from './style';

class SubmitButton extends React.Component {
  render() {
    return (
      <Button
        type="submit"
        intent="primary"
        rightIcon="floppy-disk"
        className="mt-3 btn btn-primary btn-block"
        css={btnDefault}
      >
        Crear Imagen
      </Button>
    );
  }
}

export default SubmitButton;
