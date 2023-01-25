import '../../css/Inlog.css';
import React from 'react';
import { Background } from '../components/background';

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
                <details>
                  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
                </details>
              </article>
            </header>

            <main>
              <form>
                <label for="userName">gebruikersnaam</label>
                <div class="icon-input">
                  <span><i class="fa fa-users fa"></i></span>
                  <input name="userName" placeholder='Gebruikersnaam'/>
                </div>

                <label for="password">wachtwoord</label>
                <div class="icon-input">
                  <span><i class="fa fa-lock fa"></i></span>
                  <input name="password" type="password" placeholder='Wachtwoord'/>
                </div>

                <button type='submit'>Aanmelden</button>
                <br/>
                <button>Wachtwoord vergeten?</button>
                <button><i class="fa fa-envelope fa"></i> Mail naar DALI-Helpdesk</button>
              </form>
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