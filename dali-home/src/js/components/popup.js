import React from 'react';
import { Button } from 'react-bootstrap';

export class Popup extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    this.melding = this.melding.bind(this);
  }

  melding(){
    alert('de melding wekr naar behoren.');
  }

  componentDidMount(){
    let showModalButton = document.getElementById('showModalButton');
    let modalBackdrop = document.getElementById('modalBackdrop');
    let closeModalButton = document.getElementById('closeModalButton');

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
        <Button id="showModalButton" className={this.props.showModalButtonClass}> {this.props.showModalButtonContents}</Button>
        <section id="modalBackdrop" className="dali-modal-backdrop"/>

        <section className={`dali-modal-popup-${this.props.modalFeatures}`}>
          <div class="dali-modal-content">
            <header class={`dali-modal-header-${this.props.modalHeaderFeatures}`}>
              <h2>{this.props.modalHeaderTitle}</h2>
              <button id="closeModalButton" class="dali-modal-close-button" aria-label="Close">x</button>
            </header>

            <section class="dali-modal-body">
              {this.props.children}
            </section>

            {this.props.modalFooterContent}
          </div>
        </section>
      </>
    );
  }
}

export function ModalFooter(props) {
  return (
    <footer class={`dali-modal-footer-${props.modalFooterFeatures}`}>
      {props.children}
    </footer>
  );
}