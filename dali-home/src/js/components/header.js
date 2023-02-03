import {Navbar, Nav, Button, Dropdown, DropdownButton} from 'react-bootstrap';
import React from 'react';


export class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.handleSetting = this.handleSetting.bind(this);
  }

  handleSetting(event){
    alert("hello people!");
  }

  componentDidMount(){
    
  }

  render(){
    return(
      <header className='header'>
        <a className="invisible-link header-link" href="#main" tabIndex="0">skip navigation</a>
        <h1>DALI - toepassingen</h1>
        <nav> 
          <DropdownButton id="dropdown-item-button" title="" >
          {/* <div className="grid-container"> */}
            <Dropdown.ItemText className="dali-user-profile">
              <i class="fa-solid fa-circle-user"></i>
              <h3 className="dali-user-name">Anthony Inocêncio Ramos</h3>
              <p className="dali-user-role">Uitgever | Applicatiebeheerder</p>
              <hr/>
              </Dropdown.ItemText>
            <Dropdown.Item className="dali-dropdown-sidebutton" id="userSettingsButton" as="button"><i class="fa-solid fa-gear"></i> gebruikers instellingen</Dropdown.Item>
            <Dropdown.Item className="dali-dropdown-sidebutton" id="id3" as="button"><i class="fa-solid fa-right-from-bracket"></i> log uit</Dropdown.Item>
          {/* </div> */}
          </DropdownButton>
          <Button>?</Button>
        </nav>
      </header>
    );
  }
} 