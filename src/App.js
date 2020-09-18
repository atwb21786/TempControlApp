import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    temperatureValue: 15
  }

  increaseTemperature = e => {
    this.setState({
      temperatureValue: this.state.temperatureValue + 1,
    })
  }

  decreaseTemperature = e => {
    this.setState({
      temperatureValue: this.state.temperatureValue - 1,
    })
  }

  render() {
    return (
      <div className="app-container">
        <div className="temp-display-container">
          <div className="temp-display">{this.state.temperatureValue}°C</div>
        </div>
        <div className="button-container">
          <button type="submit" onClick={this.increaseTemperature}>+</button>
          <button type="submit" onClick={this.decreaseTemperature}>-</button>
        </div>

      </div>
    )
  }
}

export default App;
