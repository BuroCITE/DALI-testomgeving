import react from 'react';
import { TaalbestandNL } from '../../library/res';
import { icons } from '../../library/res';
const text = TaalbestandNL.loadingScreen;

/**
 * @param {string} loadingScreenFeatures expects a class attribute for the variants of the loadingScreen. can choose from: all colors in theme-colors (this can be found in the variables.scss) and the following animations:
 * fading-dots,
 * pulsing-ring,
 * flipping-don-rign-square,
 * rotating-ring,
 * rotating-square;
 * this will default to red-fading-dots.
 * @param {string} title expects a string that will be shown to the user while loading. will default to TaalbestandNL.loadingScreen.loadingText.
 * 
 */
export class LoadingScreen extends react.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <main aria-label='loading screen' className={`dali-loadingScreen-${this.props.loadingScreenFeatures}`}>
        <section aria-hidden={true}>
          <h1>{this.props.title}</h1>
          <div className='loader-box'>
            <span className='loader-one'></span>
            <span className='loader-two'></span>
            <span className='loader-three'></span>
          </div>
        </section>
      </main>
    )
  }
}
LoadingScreen.defaultProps = {
  loadingScreenFeatures:'red-fading-dots',
  title: text.loadingText,
}