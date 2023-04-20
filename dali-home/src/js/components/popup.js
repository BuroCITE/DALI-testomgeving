import React, { useEffect, useRef } from 'react';

/**
 * 
 * @param {boolean} useShowModalButton
 * @param {string} showModalButtonClass a class to style the show popup button
 * @param {string} showModalButtonAriaText REQUIRED (for accesibility) - the text that wil be loaded in the aria label of the show modal button.
 * @param {*} showModalButtonContents the contents of the show popup button
 * @param {string} modalAriaText REQUIRED (for accesibility) - the text that wil be loaded in the aria label of the popup.
 * @param {string} modalFeatures expects a class attribute for the variants of the popup. can choose from: all colors in theme-colors, all sizes from modal-sizes; (this can be found in the variables.scss) this will default to red-md
 * @param {string} modalHeaderFeatures expects a class attribute for the variants of the popup header. can choose from: all colors in theme-colors, headerFooter-sizes; (this can be found in the variables.scss). size will default to 5vh (sm). color will default to gray-2
 * @param {string} modalHeaderTitle h2 title for the popup. will be shown in the header.
 * @param {string} modalBodyClass a class that can be added to the body of the popup.
 * @param {*} children all elements placed in between 2 popup tags will be send as children of this element and are placed inside the popup under the header
 * @param {function} modalFooterContent expects the ModalFooter component.
 * @param {boolean} isModalOpen
 * @returns an functional popup with custom content
 */
export function Popup(props) {
  const ref_smb = useRef();
  const ref_mb = useRef();
  const ref_cmb = useRef();

  const renderShowModalButton = () => {
    if(!props.useShowModalButton) return

    return (
      <button
        ref={ref_smb}
        aria-label={props.showModalButtonAriaText}
        className={props.showModalButtonClass}
      >
        {props.showModalButtonContents}
      </button>
    );
  }

  useEffect(() => {
    //these eventlisteners will open and close the popups on different ocassions
    const showModalButton = ref_smb.current;
    const modalBackdrop = ref_mb.current;
    const closeModalButton = ref_cmb.current;

    if(props.isModalOpen) {
      modalBackdrop.classList.add("show");
    }

    /**
     * 
     * @param {boolean} boolean expects a boolean to be presented to parent element if setAvailable was send in through props. will default to false
     */
    const changePopupOpenState = (boolean = false) => {
      if (props.setPopupOpenState) {
        props.setPopupOpenState(boolean);
      }
    }

    if (showModalButton != undefined){
      showModalButton.addEventListener("click", (event) => {
        modalBackdrop.classList.add("show");
      });
    }

    modalBackdrop.addEventListener("click", () => {
      {changePopupOpenState(false)}
      modalBackdrop.classList.remove("show");
    });

    closeModalButton.addEventListener("click", () => {
      {changePopupOpenState(false)}
      modalBackdrop.classList.remove("show");
    });
  }, [props.isModalOpen]);

    return (
      <>
        {renderShowModalButton()}
        <section
          ref={ref_mb}
          aria-hidden="true"
          className={`dali-modal-backdrop`}
        />

        <section
          aria-label={props.modalAriaText}
          className={`dali-modal-popup-${props.modalFeatures}`}
        >
          <div class="dali-modal-content">
            <section
              aria-label="popup header"
              class={`dali-modal-header-${props.modalHeaderFeatures}`}
            >
              <h2 aria-label="title">{props.modalHeaderTitle}</h2>
              <button
                ref={ref_cmb}
                class="dali-modal-close-button"
                aria-label="Close popup"
              >
                <i aria-hidden="true" class="fa-sharp fa-solid fa-xmark"></i>
              </button>
            </section>

            <section
              aria-label="popup main content"
              class={`dali-modal-body ${props.modalBodyClass}`}
            >
              {props.children}
              {props.modalFooterContent}
            </section>
          </div>
        </section>
      </>
    );
  }
Popup.defaultProps = {
  modalFeatures: "red-md",
  modalHeaderFeatures: "gray-2-sm",
  isModalOpen: false,
  useShowModalButton: true,
};

/**
 * 
 * @param {string} modalFooterFeatures expects a class attribute for the variants of the popup footer. can choose from: all colors in theme-colors, headerFooter-sizes; (this can be found in the variables.scss). size will default to none, meaning that footer wil not show if no size is given. color will default to gray-2.
 * @param {*} children all elements placed in between 2 ModalFooter tags will be send as children of this element and are placed inside the footer.
 * @returns a footer that can be used inside the Popup class. 
 */
export function ModalFooter(props) {
  return (
    <div
        aria-label="popup footer"
        class={`dali-modal-footer-${props.modalFooterFeatures}`}>
      {props.children}
    </div>
  );
}
ModalFooter.defaultProps = {
  modalFooterFeatures: "gray-2",
}

