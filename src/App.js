import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      temperatureValue: 10,
    }

    
  }

  setTemperatureValue = () => {
    console.log("Temperature")
  }

  render() {
    return (
      <div className="app-container">
        <div className="temp-display-container">
          <div className="temp-display">{this.state.temperatureValue}°C</div>
        </div>
        <div className="button-container">
          <button >+</button>
          <button>-</button>
        </div>

      </div>
    )
  }
}

export default App;
