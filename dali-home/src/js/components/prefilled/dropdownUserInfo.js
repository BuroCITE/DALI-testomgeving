import React from 'react'
import { useAuth } from '../../auth/useAuth';
import { Dropdown } from '../dropdown';

export function DropdownUserInfo(props){
  const { logout } = useAuth();
  const { user } = useAuth();

  return(
    <Dropdown
        dropdownFeatures={`${props.pageAccent}`}
        buttonClass="header-buttons"
        buttonIcon={props.icons.iElement.downArrow}>
      <section 
          aria-label="gebruikers informatie" className="dali-user-profile">
        {props.icons.iElement.roundUser}
        <h3 
            aria-label="gebruikers naam" 
            className="dali-user-name">
          {user.username}
        </h3>
        <p 
            aria-label="gebruikers rol" 
            className="dali-user-role">
          {props.text.userProfile.userRole.publisher} | 
          {props.text.userProfile.userRole.admin}
        </p>
      </section>
      <hr/>
      
      <button 
        id="userSettingsButton" 
        className="dali-dropdown-button">
          {props.icons.iElement.settings} 
          {props.text.userProfile.userSettings.buttonText}
      </button>
      <button 
        onClick={logout} 
        className="dali-dropdown-button">
          {props.icons.iElement.logout}
          {props.text.userProfile.logout.buttonText}
      </button>

    </Dropdown>
  );
}