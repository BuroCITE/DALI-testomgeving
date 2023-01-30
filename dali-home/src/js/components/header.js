import {Navbar, Nav, Button} from 'react-bootstrap';
import React from 'react';

export class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    return(
      <header>
        <a className="invisible-link header-link" href="#main" tabIndex="0">skip navigation</a>
        <button>dropdown0</button>
        <Button>?</Button>
      </header>
    );
  }
} 