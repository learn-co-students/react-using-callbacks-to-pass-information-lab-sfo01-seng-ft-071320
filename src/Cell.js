import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      color: this.props.color
    }
  }
  handleClick = () =>{
    // console.log(this.props)
    this.setState({
      color: this.props.setSelectedColor
    })
  }
  
  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  
}