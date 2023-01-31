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
            <a className="invisible-link card-link" href="#parag" tabIndex="0">skip cards</a>
            <Card number="0" className="dali-card-red" icoon="fa-solid fa-book" cardName="handboek" notice="Volgende publicatie zomer 2023" description="Handboek Openbare Ruimte"/>
            <Card number="0" className="dali-card-brown" icoon="fa-solid fa-location-dot" cardName="raadplegen via kaart" notice="" description="Raadplegen van het handboek via kaartweergave"/>
            <Card number="0" className="dali-card-turquoise" icoon="fa-solid fa-copy" cardName="programma van eisen" notice="" description=""/>
            <Card number="0" className="dali-card-purple" icoon="fa-solid fa-paperclip" cardName="bijlagen" notice="" description="Raadplegen van bijlagen"/>
            <Card number="0" className="dali-card-green" icoon="fa-solid fa-link"cardName="bronverwijzingen" notice="" description="Raadplegen van bronverwijzingen"/>
            <Card number="0" className="dali-card-blue" icoon="fa-solid fa-map" cardName="externe kaarten" notice="" description="Raadplegen van online kaarten" />
            <Card number="0" className="dali-card-purple" icoon="fa-solid fa-users" cardName="accounts en rechten" notice="" description="Gebruikersadministratie" />
          </main>
        </div>
      </>
    );
  }
}