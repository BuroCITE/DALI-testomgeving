import React, { useEffect } from 'react';
import { Header } from '../components/header';
import { Dropdown } from '../components/dropdown';
import { ModalFooter, Popup } from '../components/popup';
import {Card} from '../components/card'
import { useAuth } from '../auth/useAuth';

export function Home(props){
  const { logout } = useAuth();
    const { user } = useAuth();

    useEffect(() => {
      let userSettingsButton = document.getElementById('userSettingsButton');

      userSettingsButton.addEventListener('click', (event) => {
        alert("settings still in development");
      })
    })

    return (
      <>
        <div className="content-container">
          <Header 
            title="DALI - toepassingen"
            navRight={
              <>
                <Dropdown 
                  buttonClass="header-buttons"
                  buttonIcon={<i class="fa-solid fa-angle-down"></i>}
                >
                  <section class="dali-user-profile">
                    <i class="fa-solid fa-circle-user"></i>
                    <h3 class="dali-user-name">{user.username}</h3>
                    <p class="dali-user-role">Uitgever | Applicatiebeheerder</p>
                    <hr/>
                  </section>
                  <button id="userSettingsButton"   class="dali-dropdown-button"><i class="fa-solid fa-gear"></ i> gebruikers instellingen</button>
                  <button onClick={logout} class="dali-dropdown-button"><i class="fa-solid fa-right-from-bracket"></i> log uit</button>
                </Dropdown>
  
                <Popup 
                  showModalButtonClass="header-buttons"
                  showModalButtonContents="?"
                  modalFeatures="gray-2-xxl"
                  modalHeaderFeatures="sm"
                  modalHeaderTitle="Help"
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
              </>
            }
          />

          <main id="main">
            <a className="invisible-link card-link" href="#parag">skip cards</a>
            <Card cardFeatures="red" cardHref="" icon={<i class="fa-solid fa-book"></i>} cardName="handboek" notice="Volgende publicatie zomer 2023" description="Handboek Openbare Ruimte"/>
            <Card cardFeatures="brown" cardHref="" icon={<i class="fa-solid fa-location-dot"></i>} cardName="raadplegen via kaart" notice="" description="Raadplegen van het handboek via kaartweergave"/>
            <Card cardFeatures="turquoise" cardHref="" icon={<i class="fa-solid fa-copy"></i>} cardName="programma van eisen" notice="" description=""/>
            <Card cardFeatures="purple" cardHref="" icon={<i class="fa-solid fa-paperclip"></i>} cardName="bijlagen" notice="" description="Raadplegen van bijlagen"/>
            <Card cardFeatures="green" cardHref="bronverwijzingen" icon={<i class="fa-solid fa-link"></i>} cardName="bronverwijzingen" notice="" description="Raadplegen van bronverwijzingen"/>
            <Card cardFeatures="blue" cardHref="" icon={<i class="fa-solid fa-map"></i>} cardName="externe kaarten" notice="" description="Raadplegen van online kaarten" />
            <Card cardFeatures="purple" cardHref="" icon={<i class="fa-solid fa-users"></i>} cardName="accounts en rechten" notice="" description="Gebruikersadministratie" />
            <Card cardFeatures="green" cardHref="" icon={<i class="fa-solid fa-circle-question"></i>} cardName="ondersteuning" notice="" description="Stel vragen of geef wensen door aan de helpdesk van DALI" />

          </main>
        </div>
      </>
    );
}