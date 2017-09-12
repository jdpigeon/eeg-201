// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

const divStyle = { flex: 1 }

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <div style={divStyle}>
        {this.props.children}
      </div>
    );
  }
}
