import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { Background } from '../components/background';
import {Form, Input, IconInput, Select, Textarea, Upload} from '../components/form';
import { Sidebar, SidebarFooter, SidebarHeader } from "../components/sidebar";

export function Login() {
  console.log(useAuth());

  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    if(username.length <= 0 && password.length <= 0) return
    if(username.length > 1 && password.length >= 1){}
    else{
      //alert('error message');
      // password.setAttribute('aria-invalid', true);
    }
    return username.length > 0 && password.length > 0;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

   
    login({
      username: data.get("username"),
      password: data.get("password")
    });
  };

  return (
    <>
    <Background/>
    <Sidebar id="real"/>
    <Sidebar
      headerContent={
        <SidebarHeader>
          <figure className="header-image-container">
            <img aria-label="Het logo van dali" src={`${process.env.PUBLIC_URL}/image/Dali-logo-white-bg.jpg`}/>
            <figcaption>Het logo van dali</figcaption>
          </figure>

          <article className="dali-slogan">
            <p>de oplossing voor buitenruimtemanagement</p>
            <br/>
            <h1>DALI v5 demo</h1>
          </article>
        </SidebarHeader>
      }

      footerContent={
        <SidebarFooter>
          <p>Versie: 5.0.0.0</p>
        </SidebarFooter>
      }
    >
      <Form onSubmit={handleSubmit}>
        <IconInput 
          errorId="errorUsername" 
          errorMessage="vul een geldige gebruikersnaam in." 
          name="username" 
          label="gebruikersnaam" 
          iconAriaLabel="icoon van een gebruiker"
          iconClass="fa fa-users fa" 
          className="icon-input dali-input" 
          state=""
          value={username}
          handleChange={(e) => setUsername(e.target.value)}
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
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' disabled={!validateForm()}>Aanmelden</button>
        <br/>
        {/* ! these 2 buttons don't do anything yet and are pure astatics */}
        <button type="button">Wachtwoord vergeten?</button>
        <button type="button"><i aria-label="icoon van een brief" className="fa fa-envelope fa"></i> Mail naar DALI-Helpdesk</button>
      </Form>
    </Sidebar>
    </>
  );
}