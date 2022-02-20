import React, { Component } from 'react'
 import NavHeader from './NavHeader'
const HightOrderComponent = (Shoescomp) => {
  
  class HightOrderComponent extends Component{ 
    render() {
      return (
        <div>
          <NavHeader/>  
          <Shoescomp />
        </div>
      )
    }
  }
  return HightOrderComponent
}
export default HightOrderComponent;