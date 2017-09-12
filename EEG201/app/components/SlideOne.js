// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./SlideOne.css";
import LinkButton from "./LinkButton";

export default class SlideOne extends Component {
  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.graphContainer}>
          <p>SVG stuff goes here </p>
        </div>
        <div className={styles.titleContainer}>
          <p className={styles.currentTitle}>The Fourier Transform</p>
        </div>
        <div className={styles.viewPager}>
          <div className={styles.pageStyle}>
            <p className={styles.header}>Breaking Down the EEG </p>
            <p className={styles.bodyText}>
              Once noise is removed, the EEG can be broken down into many
              simpler periodic signals or waves.
            </p>
            <LinkButton path={"/"}>BACK</LinkButton>
          </div>
        </div>
      </div>
    );
  }
}
