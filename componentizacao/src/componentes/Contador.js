import React, { Component } from 'react';

import './Contador.css';

import Botoes from '../Botoes';
import Display from './Display';
import StepForm from './FormularioPasso';

class Counter extends Component {
  state = {
    number: this.props.initialNumber || 0,
    step: this.props.step || 5,
  };
  
  inc = () => {
    this.setState({
      number: this.state.number + this.state.step,
    });
  }
  
  dec = () => {
    this.setState({
      number: this.state.number - this.state.step,
    });
  }
  
  setStep = (step) => {
    this.setState({
      step,
    });
  }

  render() {
    const { number, step } = this.state;

    return (
      <div className="counter">
        <Display text={number} />
        <StepForm step={step} setStep={this.setStep} />
        <Botoes setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}

export default Counter;
