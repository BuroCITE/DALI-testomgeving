import {Navbar, Nav, Button} from 'react-bootstrap';
import React from 'react';
import { Dropdown } from './dropdown';
import { ModalFooter, Popup } from './popup';


export class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleSetting = this.handleSetting.bind(this);
  }

  handleSetting(event){
    alert("hello people!");
  }

  render(){
    return(<>
      <header className='header'>
        <a className="invisible-link header-link" href="#main" tabIndex="0">skip navigation</a>
        <h1>DALI - toepassingen</h1>
        <nav>
          <Dropdown buttonClass="header-buttons"/>
          <Popup 
            showModalButtonClass="header-buttons"
            showModalButtonContents="?"
            modalHeaderFeatures="sm"
            modalHeaderTitle="Help"
            modalFeatures="gray-2-xxl"
            modalFooterContent={
            <ModalFooter modalFooterFeatures="xl">
              <a>2022 - Buro CITE</a>
              <a>Visserlaan 18 2288ER Rijswijk</a>
              <a>Nederland</a>
              <a target="_blank" href="https://demo.dali-app.nl/#dashboard">www.dali-app.nl</a><a>by Anthony Inocencio Ramos</a>
            </ModalFooter>}
          >
            hello world!
          </Popup>
        </nav>
      </header>
      
      </>
    );
  }
} 
