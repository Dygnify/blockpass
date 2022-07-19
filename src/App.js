import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  componentDidMount() {    
    this.loadBlockpassWidget()
  }

  loadBlockpassWidget = () => {
    const blockpass = new window.BlockpassKYCConnect(
      'kyc_aml_c7be4', // service client_id from the admin console
      {
        refId: '1', // assign the local user_id of the connected user
      }
    )

    blockpass.startKYCConnect()

    blockpass.on('KYCConnectSuccess', () => {
      //add code that will trigger when data have been sent.
    })
  }

  render() {
      return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button id="blockpass-kyc-connect">
        Verify with Blockpass
      </button>
        </header>
      </div>
    );
  }
}
export default App;
