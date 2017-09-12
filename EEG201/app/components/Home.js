// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.css";
import LinkButton from "./LinkButton";

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>
          Welcome to EEG 201
        </h2>
        <p className={styles.bodyText}>
          At the end of this tutorial you will have learned how EEG devices can
          be used to measure the electrical activity of the brain
        </p>
        <div className={styles.buttonContainer}>
          <LinkButton path="/slideOne" disabled={false}>
            GET STARTED
          </LinkButton>
        </div>
      </div>
    );
  }
}
