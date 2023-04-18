import React from 'react'
import { Header } from '../header'
import { PopupOndersteuning } from './popupOndersteuning';
import { DropdownUserInfo } from './dropdownUserInfo';
import { icons } from '../../../library/res';
import { TaalbestandNL } from '../../../library/res';
const text = TaalbestandNL.home;

/**
 * 
 * @param {*} pageAccent the accent color of the page where HeaderUserNav is used.
 * @param {*} title the title that wil be visible in a h1 element in the header.
 * @param {*} navLeft all desireable elements that should be placed on the left side of the title.
 * @param {*} navRight all desireable elements that should be placed on the right side of the title.
 * @returns a prefilled header element with an user info dropdown (this includes: profile picture, user role, settings, log out), also an ondersteuning popup (featuring user guides and in the future a messageing system).
 */
export function HeaderUserNav(props){

  return(
    <Header
        headerFeatures={`${props.pageAccent}`}
        title={props.title}
        navLeft={props.navLeft}
        navRight={
          <>
            {props.navRight}

            <DropdownUserInfo
              pageAccent={props.pageAccent}
              text={text}
              taalBestand={TaalbestandNL}
              icons={icons}
            />
            
            <PopupOndersteuning
              pageAccent={props.pageAccent}
              text={text}
              taalBestand={TaalbestandNL}
              icons={icons}
            />
          </>
        }
    />
  )
}