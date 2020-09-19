import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#F00' 
      //  we need a place to keep track of the selected color,
    }
  }

  // we pass in newColor b/c that will be inter-changable, 
  // setState gives us the ability to change the color often
  // To keep it abstract, this method updates selectedColor with whatever is passed into it as an argument.

  setSelectedColor = (newColor) => {
    console.log(this.state)
    this.setState({
      selectedColor: newColor
    })
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )
 
 
  
  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
   
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} />
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

// recap notes: In Matrix, we defined a default color which is its state
// we want to have a way to change that color, so we created a function
// setSelectedColor and gave it an argument to pass in => that argument will be the new color
// in this method we will be changing the state of selectedColor upon user request
//  then for ColorSelector child to know about this setState we render it, passing in this.setSelectedColor. (now child has access to that state)

// for cell, it only need to know about the current default color, 
// all we would need to do is pass in selectedColor default (this.state.selectedColor) 
// remember think about how we gain access to hash/objects (dot or bracket notation)