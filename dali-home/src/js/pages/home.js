import React, { useEffect } from 'react';
import { Header } from '../components/header';
import { Dropdown } from '../components/dropdown';
import { ModalFooter, Popup } from '../components/popup';
import {Card} from '../components/card'
import { useAuth } from '../auth/useAuth';
import PdfViewerComponent from '../externalComponents/pdfViewerComponent';



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
        <div aria-label='content container' className="content-container">
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
                  modalBodyClass="ondersteuning-popup-body"
                  modalFooterContent={
                  <ModalFooter modalFooterFeatures="xl">
                    <a>2022 - Buro CITE</a>
                    <a>Visserlaan 18 2288ER Rijswijk</a>
                    <a>Nederland</a>
                    <a target="_blank" href="https://demo.dali-app.nl/#dashboard">www.dali-app.nl</a><a>by Anthony Inocencio Ramos</a>
                  </ModalFooter>}
                >
                  <section className="gebruikshandleidingen">
                    <h3 className="title">Gebruikershandleiding</h3>
                    <ul>
                      <li>Gebruikshandleidingen Handboek 
                        <nav className="button-box">
                          <a 
                            href="%PUBLIC_URL%/huisstijl.docx" download="huisstijl.docx" 
                            class="fa-solid fa-download"
                          ></a>
                          <Popup 
                            showModalButtonClass=""
                            showModalButtonContents={<i class="fa-solid fa-eye"></i>}
                            modalHeaderTitle="welkom"
                            modalFeatures="turquoise"
                            modalBodyClass="ondersteuning-popup-body"
                          >
                            <PdfViewerComponent 
                              document="huisstijl.pdf"
                              pdfViewerClass=""
                              pdfViewerFeatures=""
                            />
                          </Popup>
                        </nav>
                      </li>
                      <li>Gebruikshandleidingen Projecten
                        <nav className="button-box">
                          <a 
                            href="%PUBLIC_URL%/huisstijl.docx" download="huisstijl.docx" 
                            class="fa-solid fa-download"
                          ></a>
                          <Popup 
                            showModalButtonClass=""
                            showModalButtonContents={<i class="fa-solid fa-eye"></i>}
                            modalHeaderTitle="welkom"
                            modalFeatures="turquoise"
                            modalBodyClass="ondersteuning-popup-body"
                          >
                            <PdfViewerComponent 
                              document="huisstijl.pdf"
                              pdfViewerClass=""
                              pdfViewerFeatures=""
                            />
                          </Popup>
                        </nav>
                      </li>
                    </ul>
                  </section>
                </Popup>
                <Popup 
                  showModalButtonClass="header-buttons"
                  showModalButtonContents="!"
                  modalHeaderTitle="welkom"
                  modalFeatures="turquoise"
                >
                  hello world! :)
                  
                </Popup>
              </>
            }
          />

          <main id="main">
            <a className="invisible-link card-link" href="#parag">skip cards</a>
            <Card 
              icon={<i class="fa-solid fa-book"></i>} 
              cardName="handboek" 
              description="Handboek Openbare Ruimte"
              notice="Volgende publicatie zomer 2023" 
              cardFeatures="red" 
              cardHref="" 
            />
            <Card 
              icon={<i class="fa-solid fa-location-dot"></i>} 
              cardName="raadplegen via kaart" 
              description="Raadplegen van het handboek via kaartweergave"
              notice="" 
              cardFeatures="brown" 
              cardHref="" 
            />
            <Card 
              icon={<i class="fa-solid fa-copy"></i>} 
              cardName="programma van eisen" 
              description=""
              notice="" 
              cardFeatures="turquoise" 
              cardHref="" 
            />
            <Card 
              icon={<i class="fa-solid fa-paperclip"></i>} 
              cardName="bijlagen" 
              description="Raadplegen van bijlagen"
              notice="" 
              cardFeatures="purple" 
              cardHref="" 
            />
            <Card 
              icon={<i class="fa-solid fa-link"></i>} 
              cardName="bronverwijzingen" 
              description="Raadplegen van bronverwijzingen"
              notice="" 
              cardFeatures="green" 
              cardHref="bronverwijzingen" 
            />
            <Card 
              icon={<i class="fa-solid fa-map"></i>} 
              cardName="externe kaarten" 
              description="Raadplegen van online kaarten" 
              notice="" 
              cardFeatures="blue" 
              cardHref="" 
            />
            <Card 
              icon={<i class="fa-solid fa-users"></i>} 
              cardName="accounts en rechten" 
              description="Gebruikersadministratie" 
              notice="" 
              cardFeatures="purple" 
              cardHref="" 
              />
            <Card 
              icon={<i class="fa-solid fa-circle-question"></i>} 
              cardName="ondersteuning" 
              description="Stel vragen of geef wensen door aan de helpdesk van DALI" 
              notice="" 
              cardFeatures="green" 
              cardHref="" 
            />
          </main>
        </div>
      </>
    );
}