import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { renderInlog } from '../..';

export class Dropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  componentDidMount(){
    let userSettingsButton = document.getElementById('userSettingsButton');
    let dropdownBtn = document.getElementById('dropdownItemButton');
    let userLogoutButton = document.getElementById('userLogoutButton');
    
    userSettingsButton.addEventListener('click', (event) => {
      alert("settings still in development");
    })

    dropdownBtn.addEventListener('click', (event) => {
      dropdownBtn.setAttribute('aria-expanded', dropdownBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    })
  }

  render() {
    return (
      <section class="dropdown">
        <button id="dropdownItemButton" aria-expanded="false" class={`dropdown-button ${this.props.buttonClass}`}><i class="fa-solid fa-angle-down"></i></button>
        <article aria-labelledby="dropdown-item-button" class="dropdown-menu">
          <span class="dali-user-profile">
            <i class="fa-solid fa-circle-user"></i>
            <h3 class="dali-user-name">Anthony Inocêncio Ramos</h3>
            <p class="dali-user-role">Uitgever | Applicatiebeheerder</p>
            <hr/>
          </span>
          <button id="userSettingsButton" class="dali-dropdown-sidebutton"><i class="fa-solid fa-gear"></i> gebruikers instellingen</button>
          <button id="userLogoutButton" class="dali-dropdown-sidebutton"><i class="fa-solid fa-right-from-bracket"></i> log uit</button>
          <Link to="login" class="dali-dropdown-sidebutton"><i class="fa-solid fa-right-from-bracket"></i> log uit</Link>
        </article>
      </section>
    );
  }
}