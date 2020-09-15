import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      
      //step6. we need to write the function inside the map to access the color values needed.
      let callback = () => this.props.setSelectedColor(str)
      //step5. add a click event and provide a callback on the div element itself
      //inside the callback we'll call this.props.setSelectedColor() line above
      return <div onClick={callback} key={idx} className="color-swatch" style={{backgroundColor: str}} />
    })
  )

  //Each div element is rendered from an array of hexadecimal color strings, 
  //with its backgroundColor set to the value of the current string 
  //in the mapping process.

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }
}
