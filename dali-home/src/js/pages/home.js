import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Dropdown } from '../components/dropdown';
import { ModalFooter, Popup } from '../components/popup';
import {Card} from '../components/card'
import { useAuth } from '../auth/useAuth';
import PdfViewerComponent from '../externalComponents/pdfViewerComponent';
import { TaalbestandNL } from '../../library/res';
import { icons } from '../../library/res';
const text = TaalbestandNL.home;



export function Home(props){
  const { logout } = useAuth();
  const { user } = useAuth();
  const [pageAccent, setPageAccent] = useState('purple');

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
            headerFeatures={`${pageAccent}`}
            title={text.heading.title}
            navRight={
              <>
                <Dropdown 
                  dropdownFeatures={`${pageAccent}`}
                  buttonClass="header-buttons"
                  buttonIcon={icons.iElement.downArrow}
                >
                  <section 
                    aria-label="gebruikers informatie"   className="dali-user-profile">
                      {icons.iElement.roundUser}
                      <h3 
                        aria-label="gebruikers naam" 
                        className="dali-user-name">
                          {user.username}
                      </h3>
                      <p 
                        aria-label="gebruikers rol" 
                        className="dali-user-role">
                          {text.userProfile.userRole.publisher} | 
                          {text.userProfile.userRole.admin}
                      </p>
                      <hr/>
                  </section>
                  <button 
                    id="userSettingsButton" 
                    className="dali-dropdown-button">
                      {icons.iElement.settings} 
                      {text.userProfile.userSettings.buttonText}
                  </button>
                  <button 
                    onClick={logout} 
                    className="dali-dropdown-button">
                      {icons.iElement.logout}
                      {text.userProfile.logout.buttonText}
                  </button>
                </Dropdown>
  
                <Popup 
                  showModalButtonClass="header-buttons"
                  showModalButtonAriaText={text.ondersteuningPopup.showPopupButtonAriaText}
                  showModalButtonContents={text.ondersteuningPopup.showPopupButtonText}
                  modalAriaText = {text.ondersteuningPopup.popupAriaText}
                  modalFeatures={`${pageAccent}-xxl`}
                  modalHeaderFeatures="gray-2-sm"
                  modalHeaderTitle={text.ondersteuningPopup.popupheaderTitle}
                  modalBodyClass="ondersteuning-popup-body"
                  modalFooterContent={
                  <ModalFooter modalFooterFeatures="gray-2-xl">
                    <a>{TaalbestandNL.buroCite.contactInfo.startYear}</a>
                    <a>{TaalbestandNL.buroCite.contactInfo.address}</a>
                    <a>{TaalbestandNL.buroCite.contactInfo.country}</a>
                    <a 
                      target="_blank" 
                      href={TaalbestandNL.buroCite.contactInfo.website.link}>
                        {TaalbestandNL.buroCite.contactInfo.website.text}
                    </a>
                  </ModalFooter>}>
                    <section className="gebruikshandleidingen">
                      <h3 
                        className="title">
                          {text.ondersteuningPopup.userManuals.title}
                      </h3>
                      <ul>
                        <li>
                          {text.ondersteuningPopup.userManuals.liorManual.title} 
                          <nav className="button-box">
                            <a
                              href={text.liorManualPopup.downloadLink}
                              download={text.liorManualPopup.download} 
                              className={`dali-modal-accent ${icons.iClass.download}`}
                            ></a>
                            <Popup 
                              showModalButtonClass="dali-modal-accent"
                              showModalButtonContents={icons.iElement.eye}
                              modalHeaderTitle={text.liorManualPopup.popupheaderTitle}
                              modalFeatures={`${pageAccent}`}
                              modalBodyClass="ondersteuning-popup-body">
                                <PdfViewerComponent 
                                  document={text.liorManualPopup.pdf}
                                  pdfViewerClass=""
                                  pdfViewerFeatures=""
                                />
                            </Popup>
                          </nav>
                        </li>
                        <li>
                          {text.ondersteuningPopup.userManuals.pveManual.title}
                          <nav className="button-box">
                            <a 
                              href={text.pveManualPopup.downloadLink}
                              download={text.pveManualPopup.download}
                              className={`dali-modal-accent ${icons.iClass.download}`}
                            ></a>
                            <Popup 
                              showModalButtonClass="dali-modal-accent"
                              showModalButtonContents={icons.iElement.eye}
                              modalHeaderTitle={text.pveManualPopup.popupheaderTitle}
                              modalFeatures={`${pageAccent}`}
                              modalBodyClass="ondersteuning-popup-body">
                                <PdfViewerComponent 
                                  document={text.pveManualPopup.pdf}
                                  pdfViewerClass=""
                                  pdfViewerFeatures=""
                                />
                            </Popup>
                          </nav>
                        </li>
                      </ul>
                    </section>
                </Popup>
              </>
            }
          />

          <main id="main">
            <a 
              className="invisible-link card-link" 
              href="">
                {text.main.skipCardLink}
            </a>
            <Card 
              icon={icons.iElement.book} 
              cardName={text.main.cards.lior.title}
              description={text.main.cards.lior.description}
              notice={text.main.cards.lior.notice}
              cardFeatures="red" 
              cardHref="/#/Handboek"
              ariaText={text.main.cards.lior.ariaText}
            />
            <Card 
              icon={icons.iElement.location}
              cardName={text.main.cards.adviceFromMaps.title}
              description={text.main.cards.adviceFromMaps.description}
              notice={text.main.cards.adviceFromMaps.notice}
              cardFeatures="brown-disabled" 
              cardHref="" 
              ariaText={text.main.cards.adviceFromMaps.ariaText}
            />
            <Card 
              icon={icons.iElement.copy} 
              cardName={text.main.cards.pve.title}
              description={text.main.cards.pve.description}
              notice={text.main.cards.pve.notice}
              cardFeatures="turquoise-disabled" 
              cardHref=""
              ariaText={text.main.cards.pve.ariaText}
            />
            <Card 
              icon={icons.iElement.paperclip}
              cardName={text.main.cards.Appendix.title}
              description={text.main.cards.Appendix.description}
              notice={text.main.cards.Appendix.notice}
              cardFeatures="purple-disabled" 
              cardHref="" 
              ariaText={text.main.cards.Appendix.ariaText}
            />
            <Card 
              icon={icons.iElement.link}
              cardName={text.main.cards.sourceReferences.title}
              description={text.main.cards.sourceReferences.description}
              notice={text.main.cards.sourceReferences.notice}
              cardFeatures="green" 
              cardHref="/#/bronverwijzingen" 
              ariaText={text.main.cards.sourceReferences.ariaText}
            />
            <Card 
              icon={icons.iElement.map}
              cardName={text.main.cards.externalMaps.title}
              description={text.main.cards.externalMaps.description}
              notice={text.main.cards.externalMaps.notice}
              cardFeatures="blue-disabled" 
              cardHref="" 
              ariaText={text.main.cards.externalMaps.ariaText}
            />
            <Card 
              icon={icons.iElement.users}
              cardName={text.main.cards.accountsAndRights.title}
              description={text.main.cards.accountsAndRights.description}
              notice={text.main.cards.accountsAndRights.notice}
              cardFeatures="purple-disabled" 
              cardHref="" 
              ariaText={text.main.cards.accountsAndRights.ariaText}
              />
            <Card 
              icon={icons.iElement.roundQuestion} 
              cardName={text.main.cards.support.title}
              description={text.main.cards.support.description}
              notice={text.main.cards.support.notice}
              cardFeatures="green-disabled" 
              cardHref="" 
              ariaText={text.main.cards.support.ariaText}
            />
          </main>
        </div>
      </>
    );
}