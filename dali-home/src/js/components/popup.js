import React from 'react';

export class Popup extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <section className="fade modal-backdrop show"></section>
        <div aria-modal="true" className='fade dali-modal-dark modal show' tabIndex='0'>
          <div class="modal-dialog modal-lg modal-dialog-centered">
            <section class="modal-content">
              <header class="dali-modal-header-sm modal-header">
                <h1 class="modal-title h4">self made modal</h1>
                <button type="button" class="btn-close" aria-label="Close"></button>
              </header>
              <div class="modal-body">

              </div>
              <div class="dali-modal-footer-xxl modal-footer">
                <footer>
                  <a>2022 - Buro CITE</a>
                  <a>Visserlaan 18 2288ER Rijswijk</a>
                  <a>Nederland</a>
                  <a target="_blank" href="https://demo.dali-app.nl/#dashboard">www.dali-app.nl</a><a>by Anthony Inocencio Ramos</a>
                </footer>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}
// ! get rid of as many divs as possible and make the popup work.
// ! at the time of writing this the popup has not been tested but expectations are that it will not.
// ! make sure to add the css from the source 
// ! source of the whole popup: test-form-v2