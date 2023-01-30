import React from 'react';

export class Background extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
    <>
      <div className='box'>
        <div className='wave -one'></div>
        <div className='wave -two'></div>
        <div className='wave -three'></div>
      </div>
    </>
    );
  }
}