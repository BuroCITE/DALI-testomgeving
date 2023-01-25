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
      <main>
        {/* <img src="https://random.imagecdn.app/1700/850"/> */}
        <Background/>
        <div class="inlog-shadow">
          <div class="inlog-sidebar">
            <img src={`${process.env.PUBLIC_URL}/image/Dali-logo-white-bg.jpg`}/>

            <div class="dali-slogan">
              <p>de oplossing voor buitenruimtemanagement</p>
              <br/>
              <h1>DALI v5 demo</h1>
            </div>

            <form>
              <label for="userName">gebruikersnaam</label>
              <div class="icon-input">
              <span><i class="fa fa-users fa"></i></span>
                <input name="userName" placeholder='Gebruikersnaam'></input>
              </div>
              

              <label for="password">wachtwoord</label>
              <div class="icon-input">
                <span><i class="fa fa-lock fa"></i></span>
                <input name="password" type="password" placeholder='Wachtwoord'></input>
              </div>

              <button type='submit'>Aanmelden</button>
              <br/>
              <button>Wachtwoord vergeten?</button>
              <button><i class="fa fa-envelope fa"></i> Mail naar DALI-Helpdesk</button>
            </form>

            <footer>
              <p>Versie: 5.0.0.0</p>
            </footer>
          </div>
        </div>
      </main>
    </>
    );
  }
}