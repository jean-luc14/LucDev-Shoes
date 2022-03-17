import React, { Component } from 'react'
 import Navbar from './Navbar'
const HightOrderComponent = (Shoescomp) => {
  
  class HightOrderComponent extends Component{ 
    render() {
      return (
        <div>
          <Navbar/>  
          <Shoescomp />
        </div>
      )
    }
  }
  return HightOrderComponent
}
export default HightOrderComponent;