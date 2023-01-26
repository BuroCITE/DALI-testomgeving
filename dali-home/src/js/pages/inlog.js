import React from 'react';
import { Background } from '../components/background';
import {Form} from '../components/form';
import {Input, IconInput, Select, Textarea, Upload} from '../components/form';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
    <>

        <Background/>
        <aside class="inlog-shadow">
          <div class="inlog-sidebar">
            <header>
              <figure class="header-image-container">
                <img src={`${process.env.PUBLIC_URL}/image/Dali-logo-white-bg.jpg`}/>
                <figcaption>Het logo van dali</figcaption>
              </figure>

              <article class="dali-slogan">
                <p>de oplossing voor buitenruimtemanagement</p>
                <br/>
                <h1>DALI v5 demo</h1>
              </article>
            </header>

            <main>
              <Form>
                <IconInput gridLocation="" type="" name="username" className="icon-input dali-input" label="gebruikersnaam" iconClass="fa fa-users fa" handleChange="" state=""/>
                <IconInput gridLocation="" type="password" name="password" className="icon-input dali-input" label="wachtwoord" iconClass="fa fa-lock fa" handleChange="" state=""/>
                <button type='submit'>Aanmelden</button>
                <br/>
                <button>Wachtwoord vergeten?</button>
                <button><i class="fa fa-envelope fa"></i> Mail naar DALI-Helpdesk</button>
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