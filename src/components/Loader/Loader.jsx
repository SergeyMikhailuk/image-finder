import React, { Component } from "react";
import style from './Loader.module.css';

class Loader extends Component {
  state = {};
  render() {
    return (
      <div className={style.ldsEllipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default Loader;
