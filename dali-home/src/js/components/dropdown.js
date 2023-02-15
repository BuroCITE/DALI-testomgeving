import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/useAuth';

export function Dropdown(props) {
  const state = useState();
  const { logout } = useAuth();

  useEffect(() => {
    let userSettingsButton = document.getElementById('userSettingsButton');
    let dropdownBtn = document.getElementById('dropdownItemButton');
    
    userSettingsButton.addEventListener('click', (event) => {
      alert("settings still in development");
    })

    dropdownBtn.addEventListener('click', (event) => {
      dropdownBtn.setAttribute('aria-expanded', dropdownBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    })
  },[]);

  return (
    <section class="dropdown">
      <button id="dropdownItemButton" aria-expanded="false" class={`dropdown-button ${props.buttonClass}`}><i class="fa-solid fa-angle-down"></i></button>
      <article aria-labelledby="dropdown-item-button" class="dropdown-menu">
        <section class="dali-user-profile">
          <i class="fa-solid fa-circle-user"></i>
          <h3 class="dali-user-name">Anthony Inocêncio Ramos</h3>
          <p class="dali-user-role">Uitgever | Applicatiebeheerder</p>
          <hr/>
        </section>
        <button id="userSettingsButton" class="dali-dropdown-sidebutton"><i class="fa-solid fa-gear"></i> gebruikers instellingen</button>
        <button onClick={logout} class="dali-dropdown-sidebutton"><i class="fa-solid fa-right-from-bracket"></i> log uit</button>
      </article>
    </section>
  );
}