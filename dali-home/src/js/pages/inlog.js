import '../../css/Inlog.css';
import React from 'react';

export class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render() {
    return (
    <>
      <main>
        <img src="https://random.imagecdn.app/1700/850"/>
        <div class="inlog-shadow">
          <div class="inlog-sidebar">
            <img src={`${process.env.PUBLIC_URL}/image/Dali-logo-white-bg.jpg`}/>
            <h1>DALI</h1>
          </div>
        </div>
      </main>
    </>
    );
  }
}