import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
    temperatureValue: 15,
    temperatureColor: '',
  }

  increaseTemperature = e => {
    this.setState({
      temperatureValue: this.state.temperatureValue + 1,
    })
    if(this.state.temperatureValue >= 15) {
      this.setState({
        temperatureColor: 'hot'
      })
    }
    if(this.state.temperatureValue >= 30) {
      this.setState({
        temperatureValue: 30
      })
      
    }
  }

  decreaseTemperature = e => {
    this.setState({
      temperatureValue: this.state.temperatureValue - 1,
    })
    if(this.state.temperatureValue <= 15) {
      this.setState({
        temperatureColor: 'cold'
      })
    }
    if(this.state.temperatureValue <= 0) {
      this.setState({
        temperatureValue: 0
      })
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="temp-display-container">
          <div className={`temp-display ${this.state.temperatureColor}`}>{this.state.temperatureValue}°C</div>
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
