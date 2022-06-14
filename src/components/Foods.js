import React, { Component } from "react";

export default class Foods extends Component {
  render() {
    const { image, titel, discription } = this.props;
    return (
      <div className="card">
        <div className="card__body">
          <img className="w-100" src={image} alt="" />
          <h2 className="card__titel">{titel}</h2>
          <p className="card__description">{discription}</p>
        </div>
      </div>
    );
  }
}
