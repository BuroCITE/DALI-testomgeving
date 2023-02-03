import {Navbar, Nav, Button} from 'react-bootstrap';
import React from 'react';
import { Dropdown } from './dropdown';


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
    return(
      <header className='header'>
        <a className="invisible-link header-link" href="#main" tabIndex="0">skip navigation</a>
        <h1>DALI - toepassingen</h1>
        <nav>
          <Dropdown buttonClass="header-buttons"/>
          <Button className="header-buttons">?</Button>
        </nav>
      </header>
    );
  }
} 
