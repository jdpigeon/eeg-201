// @flow
// LinkButton.js
// A reusable button for navigating from section to section with the press of a button

import React, { Component } from "react";
import { Link } from "react-router-dom";

const activeStyle = {
  display: 'flex',
  justifyContent: "center",
  backgroundColor: "#ffffff",
  height: 50,
  margin: 5,
  padding: 5,
  paddingLeft: 15,
  paddingRight: 15,
  alignItems: "center",
  borderRadius: 4
};

const disabledStyle = {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "#6CCBEF",
  height: 50,
  margin: 5,
  padding: 5,
  alignItems: "center",
  borderRadius: 4
};

const textStyle = {
  color: "#6CCBEF",
  fontWeight: 700,
  fontSize: 25,
};

export default class LinkButton extends Component {
  render() {
    return (
      <Link to={this.props.path}>
        <div style={this.props.disabled ? disabledStyle : activeStyle}>

            <p style={textStyle}>
              {this.props.children}
            </p>

        </div>
      </Link>
    );
  }
}
