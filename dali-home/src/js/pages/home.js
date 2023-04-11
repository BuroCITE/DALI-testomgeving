import React, { useEffect, useState } from 'react';
import { Header } from '../components/header';
import { Dropdown } from '../components/dropdown';
import { ModalFooter, Popup } from '../components/popup';
import {Card} from '../components/card'
import { useAuth } from '../auth/useAuth';
import PdfViewerComponent from '../externalComponents/pdfViewerComponent';
import { TaalbestandNL } from '../../library/res';
import { icons } from '../../library/res';
import { InvisibleLink } from '../components/invisibleLink';
import { HeaderUserNav } from '../components/prefilled/headerUserNav';
const text = TaalbestandNL.home;



export function Home(props){
  const { logout } = useAuth();
  const { user } = useAuth();
  const [pageAccent, setPageAccent] = useState('gray-2');

    useEffect(() => {
      let userSettingsButton = document.getElementById('userSettingsButton');

      userSettingsButton.addEventListener('click', (event) => {
        alert("settings still in development");
      })
    })

    return (
      <>
        <div id="home-content-container" aria-label='content container' className="content-container">
          <HeaderUserNav title={text.heading.title} pageAccent={pageAccent} text={text} taalBestand={TaalbestandNL} icons={icons}/>

          <main id="main" className={`resultaten-contentbox-${pageAccent}`}>
            <InvisibleLink targetId="home-content-container" linkText={text.main.skipCardLink}/>
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
              cardFeatures="purple" 
              cardHref="/#/Bijlagen" 
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