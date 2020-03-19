/** @jsx jsx */
import { Alignment, Navbar } from '@blueprintjs/core';
import { jsx } from '@emotion/core';
import { Component } from 'react';
import { navContainerStyle } from './styles';

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
