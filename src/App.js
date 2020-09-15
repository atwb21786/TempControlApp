import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <div className="temp-display-container">
          <div className="temp-display">15°C</div>
        </div>
        <div className="button-container">
          <button>+</button>
          <button>-</button>
        </div>

      </div>
    )
  }
}

export default App;
