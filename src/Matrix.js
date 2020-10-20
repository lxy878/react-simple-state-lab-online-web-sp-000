import React, { Component } from 'react';

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val}/>)
  }

  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}
