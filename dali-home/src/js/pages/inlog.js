import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { Background } from '../components/background';
import {Form, Input, IconInput, Select, Textarea, Upload} from '../components/form';
import { Sidebar, SidebarFooter, SidebarHeader } from "../components/sidebar";
import { TaalbestandNL } from '../../library/res';
import { icons } from '../../library/res';
const text = TaalbestandNL.login;

export function Login() {
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
    <Sidebar
      sidebarClass="inlog-shadow"
      sidebarAriaText={text.sidebarAriaText}
      sidebarFeatures="right"
      headerContent={
        <SidebarHeader>
          <figure className="header-image-container">
            {TaalbestandNL.buroCite.logo.whiteSM}
            <figcaption>{TaalbestandNL.buroCite.logo.caption}</figcaption>
          </figure>

          <article aria-label="het dali slogan" className="dali-slogan">
            <p>{TaalbestandNL.buroCite.slogan}</p>
            <br/>
            <h1>
              {TaalbestandNL.buroCite.productName}
              {TaalbestandNL.buroCite.productVersion}
              {TaalbestandNL.buroCite.productInviroment}
            </h1>
          </article>
        </SidebarHeader>
      }

      footerContent={
        <SidebarFooter>
          <p>{TaalbestandNL.buroCite.productFullVersion}</p>
        </SidebarFooter>
      }
    >
      <Form 
        onSubmit={handleSubmit} 
        formId="loginForm" 
        formAriaText={text.formAriaText}>
          <IconInput 
            errorId="errorUsername" 
            errorMessage={text.userNameInput.errorMessage}
            name="username"
            label={text.userNameInput.label}
            iconAriaLabel={text.userNameInput.iconAriaText}
            iconClass={icons.iClass.users} 
            className="icon-input dali-input" 
            state=""
            value={username}
            handleChange={(e) => setUsername(e.target.value)}
          />
          <IconInput 
            errorId="errorPassword" 
            errorMessage={text.passwordInput.errorMessage}
            name="password" 
            label={text.passwordInput.label}
            iconAriaLabel={text.passwordInput.iconAriaText}
            iconClass={icons.iClass.lock}
            className="icon-input dali-input" 
            type="password" 
            state=""
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' disabled={!validateForm()}>
            {text.submitButtonText}
          </button>
          <br/>
          {/* ! these 2 buttons don't do anything yet and are pure astatics */}
          <button type="button">{text.forgotPasswordButtonText}</button>
          <button type="button">{icons.iElement.envelope} {text.mailButtonText}</button>
      </Form>
    </Sidebar>
    </>
  );
}