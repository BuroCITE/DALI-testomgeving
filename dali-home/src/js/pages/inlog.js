import React from 'react';
import { renderHome } from '../..';
import { Background } from '../components/background';
import {Form} from '../components/form';
import {Input, IconInput, Select, Textarea, Upload} from '../components/form';

/**
 * this class is the intire login page.
 * to recreate the login page revere to this export.
 */
export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'aramos',
      password: 'password'
    };
  }

  /**
   * in this function lies a (temporary) login verifier. 
   * ! this solution is hard coded
   * ! the username and password are not dynamic
   * ! the input fields are not dynamic
   * ! the output location is not dynamic
   * 
   */
  componentDidMount(){
    let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      let username = event.target[0];
      let password = event.target[1];
    
      if (username.value !== this.state.username || password.value !== this.state.password) {
        username.setAttribute('aria-invalid', true);
        password.setAttribute('aria-invalid', true);
      } else {
        renderHome();
      }
    });
  }

  render() {
    return (
    <>
      <Background/>
      <aside className="inlog-shadow">
        <div className="inlog-sidebar">
          <header>
            <figure className="header-image-container">
              <img aria-label="Het logo van dali" src={`${process.env.PUBLIC_URL}/image/Dali-logo-white-bg.jpg`}/>
              <figcaption>Het logo van dali</figcaption>
            </figure>

            <article className="dali-slogan">
              <p>de oplossing voor buitenruimtemanagement</p>
              <br/>
              <h1>DALI v5 demo</h1>
            </article>
          </header>

          <main>
            <Form>
              <IconInput 
                errorId="errorUsername" 
                errorMessage="vul een geldige gebruikersnaam in." 
                name="username" 
                label="gebruikersnaam" 
                iconAriaLabel="icoon van een gebruiker"
                iconClass="fa fa-users fa" 
                className="icon-input dali-input" 
                state=""
              />
              <IconInput 
                errorId="errorPassword" 
                errorMessage="wachtwoord is verkeerd" 
                name="password" 
                label="wachtwoord" 
                iconAriaLabel="icoon van een slot"
                iconClass="fa fa-lock fa" 
                className="icon-input dali-input" 
                type="password" 
                state=""
              />
              <button type='submit'>Aanmelden</button>
              <br/>
              {/* ! these 2 buttons don't do anything yet and are pure astatics */}
              <button type="button">Wachtwoord vergeten?</button>
              <button type="button"><i aria-label="icoon van een brief" className="fa fa-envelope fa"></i> Mail naar DALI-Helpdesk</button>
            </Form>
          </main>

          <footer>
            <p>Versie: 5.0.0.0</p>
          </footer>
        </div>
      </aside>
    </>
    );
  }
}