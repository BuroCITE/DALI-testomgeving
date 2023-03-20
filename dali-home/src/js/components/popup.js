import React from 'react';

/**
 * 
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
 * @returns an functional popup with custom content
 */
export class Popup extends React.Component {
  // construct and createRef are react functies that can be used in class components. for an explanation, google is our friend.
  constructor(props){
    super(props);
    this.state = {};
    this.ref_smb = React.createRef();
    this.ref_mb = React.createRef();
    this.ref_cmb = React.createRef();
  }

  componentDidMount(){
    //these eventlisteners will open and close the popups on different ocassions
    const showModalButton = this.ref_smb.current;
    const modalBackdrop = this.ref_mb.current;
    const closeModalButton = this.ref_cmb.current;

    showModalButton.addEventListener('click', (event) => {
      modalBackdrop.classList.add('show');
    });

    modalBackdrop.addEventListener('click', () => {
      modalBackdrop.classList.remove('show');
    });

    closeModalButton.addEventListener('click', () => {
      modalBackdrop.classList.remove('show');
    });
  }

  render() {
    return (
      <>
        <button ref={this.ref_smb} aria-label={this.props.showModalButtonAriaText} className={this.props.showModalButtonClass}> {this.props.showModalButtonContents}</button>
        <section ref={this.ref_mb} aria-hidden="true" className="dali-modal-backdrop"/>

        <section aria-label={this.props.modalAriaText} className={`dali-modal-popup-${this.props.modalFeatures}`}>
          <div class="dali-modal-content">
            <section aria-label="popup header" class={`dali-modal-header-${this.props.modalHeaderFeatures}`}>
              <h2 aria-label="title">{this.props.modalHeaderTitle}</h2>
              <button ref={this.ref_cmb} class="dali-modal-close-button" aria-label="Close popup"><i aria-hidden="true" class="fa-sharp fa-solid fa-xmark"></i></button>
            </section>

            <section aria-label="popup main content" class={`dali-modal-body ${this.props.modalBodyClass}`}>
              {this.props.children}
            </section>

            {this.props.modalFooterContent}
          </div>
        </section>
      </>
    );
  }
}
Popup.defaultProps = {
  modalFeatures: "red-md",
  modalHeaderFeatures: "gray-2-sm",
}

/**
 * 
 * @param {string} modalFooterFeatures expects a class attribute for the variants of the popup footer. can choose from: all colors in theme-colors, headerFooter-sizes; (this can be found in the variables.scss). size will default to none, meaning that footer wil not show if no size is given. color will default to gray-2.
 * @param {*} children all elements placed in between 2 ModalFooter tags will be send as children of this element and are placed inside the footer.
 * @returns a footer that can be used inside the Popup class. 
 */
export function ModalFooter(props) {
  return (
    <div aria-label="popup footer" class={`dali-modal-footer-${props.modalFooterFeatures}`}>
      {props.children}
    </div>
  );
}
ModalFooter.defaultProps = {
  modalFooterFeatures: "gray-2",
}

