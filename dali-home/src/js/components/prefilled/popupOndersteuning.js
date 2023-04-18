import React from 'react'
import PdfViewerComponent from '../../externalComponents/pdfViewerComponent';
import { ModalFooter, Popup } from '../popup';
import { IconButtonBox } from './iconButtonBox';
import { Form, Textarea } from '../form';

export function PopupOndersteuning(props){

  return(
    <Popup
        showModalButtonClass="header-buttons"
        showModalButtonAriaText={props.text.ondersteuningPopup.showPopupButtonAriaText}
        showModalButtonContents={props.text.ondersteuningPopup.showPopupButtonText}
        modalAriaText = {props.text.ondersteuningPopup.popupAriaText}
        modalFeatures={`${props.pageAccent}-xxl`}
        modalHeaderFeatures={`${props.pageAccent}-sm`}
        modalHeaderTitle={props.text.ondersteuningPopup.popupheaderTitle}
        modalBodyClass="ondersteuning-popup-body"
        modalFooterContent={
          <ModalFooter modalFooterFeatures="gray-2-xl">
            <a>{props.taalBestand.buroCite.contactInfo.startYear}</a>
            <a>{props.taalBestand.buroCite.contactInfo.address}</a>
            <a>{props.taalBestand.buroCite.contactInfo.country}</a>
            <a
                target="_blank"
                href={props.taalBestand.buroCite.contactInfo.website.link}>
              {props.taalBestand.buroCite.contactInfo.website.text}
            </a>
          </ModalFooter>}>
      <section className="gebruikshandleidingen">
        <h3
          className="title">
            {props.text.ondersteuningPopup.userManuals.title}
        </h3>

          <ul>
            <li>
              {props.text.ondersteuningPopup.userManuals.liorManual.title}

              <IconButtonBox pageAccent={props.pageAccent}>
                <a
                  href={props.text.liorManualPopup.downloadLink}
                  download={props.text.liorManualPopup.download}
                  className={`dali-modal-accent ${props.icons.iClass.download}`}>
                </a>

                <Popup
                    showModalButtonClass="dali-modal-accent"
                    showModalButtonContents={props.icons.iElement.eye}
                    modalHeaderTitle={props.text.liorManualPopup.popupheaderTitle}
                    modalFeatures={`${props.pageAccent}`}
                    modalBodyClass="ondersteuning-popup-body">
                  <PdfViewerComponent
                    document={props.text.liorManualPopup.pdf}
                    pdfViewerClass=""
                    pdfViewerFeatures=""
                  />
                </Popup>
              </IconButtonBox>
            </li>

            <li>
              {props.text.ondersteuningPopup.userManuals.pveManual.title}

              <IconButtonBox pageAccent={props.pageAccent}>
                <a
                  href={props.text.pveManualPopup.downloadLink}
                  download={props.text.pveManualPopup.download}
                  className={`dali-modal-accent ${props.icons.iClass.download}`}>
                </a>

                <Popup
                    showModalButtonClass="dali-modal-accent"
                    showModalButtonContents={props.icons.iElement.eye}
                    modalHeaderTitle={props.text.pveManualPopup.popupheaderTitle}
                    modalFeatures={`${props.pageAccent}`}
                    modalBodyClass="ondersteuning-popup-body">
                  <PdfViewerComponent
                    document={props.text.pveManualPopup.pdf}
                    pdfViewerClass=""
                    pdfViewerFeatures=""
                  />
                </Popup>
              </IconButtonBox>
            </li>
          </ul>
        </section>

        <section className="helpdesk">
          <h3
              className="title">
            {props.text.ondersteuningPopup.helpDesk.title}
          </h3>

          <Form>
            <Textarea
              name="Dali-Helpdesk"
              label={props.text.ondersteuningPopup.helpDesk.textArea.label}
              className="ondersteuning-Helpdesk">
            </Textarea>

            <button>{props.text.ondersteuningPopup.helpDesk.submit}</button>
          </Form>

        </section>
    </Popup>
  );
}