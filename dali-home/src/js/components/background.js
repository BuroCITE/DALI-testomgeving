import React from 'react';

export class Background extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
    <>
      <div class='box'>
        <div class='wave -one'></div>
        <div class='wave -two'></div>
        <div class='wave -three'></div>
      </div>
    </>
    );
  }
}