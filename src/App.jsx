import React, { Component } from 'react';
import './App.scss';
import { placeholder } from './placeholder.js'
import Input from './Components/Input/Input'
import Output from './Components/Output/Output'
import classNames from 'classnames';

class App extends Component {
  state = {
    inputlValue: placeholder,
    isFullscreen: {
      input: false,
      output: false
    }
  }

  handleChange(event) {
    this.setState({
      inputlValue: event.target.value
    });
  }

  handleInputClick() {
    this.setState(state => (
      {
        isFullscreen: {
          input: !state.isFullscreen.input
        }
      }
    ));
  }

  handleOutputClick() {
    this.setState(state => (
      {
        isFullscreen: {
          output: !state.isFullscreen.output
        }
      }
    ));
  }

  render() {
    let rootClass = classNames("app", {
      'app--fullscreen': this.state.isFullscreen.input || this.state.isFullscreen.output,
    });
    return <div className={rootClass}>
      <Input className="card card--left" value={this.state.inputlValue} handleChange={e => this.handleChange(e)} handleInputClick={() => this.handleInputClick()} isFullscreen={this.state.isFullscreen} />
      <Output className="card card--right" input={this.state.inputlValue} isFullscreen={this.state.isFullscreen} handleOutputClick={() => this.handleOutputClick()} />
    </div>
  }
}

export default App
