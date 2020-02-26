/** @jsx jsx */
import { Alignment, Button, Navbar } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import React, { Component, createRef, ChangeEvent, FormEvent } from 'react';
import { fileUpload, navContainerStyle } from './styles';

class Nav extends Component {

  render() {
    return (
      <Navbar css={navContainerStyle}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Quiltro</Navbar.Heading>
          <Navbar.Divider />
        </Navbar.Group>
      </Navbar>
    );
  }
}

export default Nav;
