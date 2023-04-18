import React from 'react';
import { Popup } from '../popup';
import { icons } from '../../../library/res';

export function PopupGoHome(props){

  return(
    <Popup
        showModalButtonClass="header-buttons"
        showModalButtonContents={icons.iElement.home}
        modalFeatures={`${props.pageAccent}-sm`}
        modalHeaderTitle="Toepassing sluiten">
          
      <p>Toepassing sluiten en terugkeren naar startpagina?</p>
      <a href="/#/" className="dali-modal-question-button dali-modal-accent">OK</a>
    </Popup>
  );
}