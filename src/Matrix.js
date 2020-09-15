import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    //step1. this.state keep track of the selected color and sets a default color
    this.state = {
      selectedColor: '#FFF'
    }
  }

  //step2. here we're create a method to update the state
  changeColor = (newColor) => {
    this.setState ({
      selectedColor: newColor
    })
  }

  //step7. the last step is to configure the Cell component so that when is clicked it changes color to the current selected color.
  genRow = (vals) => (
    //
    //step4.Cell only needs to know the current selected color, not change it, so we pass
    //this in to every Cell returned by genRow() as a prop called selectedColor
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        {/*step3. here we're passing data and callbacks to the children */}
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}