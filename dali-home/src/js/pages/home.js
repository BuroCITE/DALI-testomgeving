import {Card} from '../components/card'
import React from 'react';
import { Header } from '../components/header';

export class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="content-container">
          <Header/>

          <main id="main">
            <a className="invisible-link card-link" href="#parag" tabIndex="2">skip cards</a>
            <Card number="2" name="book" description="this is a description." color="rgba(200, 70, 100, 0.3)"/>
            <Card number="2" name="kaart" description="this is a description." color="rgba(255, 189, 51, 0.5)"/>
            <Card number="2" name="eisen" description="this is a description." color="rgba(23,127,117,0.3)"/>
            <Card number="2" name="bijlage" description="this is a description." color="rgba(76, 175, 80, 0.3)"/>
            <Card number="2" name="bron" description="this is a description." color="rgba(76, 175, 80, 0.3)"/>
            <Card number="2" name="externe" description="this is a description." color="rgba(0, 148, 255, 0.3)"/>
          </main>
        </div>
      </>
    );
  }
}