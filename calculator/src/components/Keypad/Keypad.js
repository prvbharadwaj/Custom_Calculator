import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Keypad.css';


class Keypad extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            keyboard_input : 0
        };
    }

    handleNumberInput = (num) =>{
        let temp = this.state.keyboard_input*10 + num
        this.setState({
            keyboard_input : temp
        });
        console.log(this.state.keyboard_input)
    }

    handleClearInput = (code) =>{
        if(code === 1)
            this.setState({keyboard_input : 0})
    }


    render() {
        return (
            <div className='keypad-master'>                
                <div className='keypad-container'>
                    <div className='actual-keypad'>
                        <div className='func-rows'>
                            <p onClick={e => this.handleClearInput(1)}>AC</p>
                            <p onClick={e => this.handleClearInput(2)}>C</p>
                            <p>%</p>
                            <p className='four-or' style={{fontSize:'19px'}}>{'\u00F7'}</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.handleNumberInput(7)}>7</p>
                            <p onClick={e => this.handleNumberInput(8)}>8</p>
                            <p onClick={e => this.handleNumberInput(9)}>9</p>
                            <p className='four-or' style={{fontSize:'19px'}}>x</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.handleNumberInput(4)}>4</p>
                            <p onClick={e => this.handleNumberInput(5)}>5</p>
                            <p onClick={e => this.handleNumberInput(6)}>6</p>
                            <p className='four-or' style={{fontSize:'19px'}}>+</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.handleNumberInput(1)}>1</p>
                            <p onClick={e => this.handleNumberInput(2)}>2</p>
                            <p onClick={e => this.handleNumberInput(3)}>3</p>
                            <p className='four-or' style={{fontSize:'19px'}}>-</p>
                        </div>
                        <div className='num-rows'>
                            <p id='double-size' onClick={e => this.handleNumberInput(0)}>0</p>
                            <p>.</p>
                            <p className='four-or' style={{fontSize:'19px'}}>=</p>
                        </div>
                    </div>       
                </div>
            </div>
        );
    }
}

Keypad.propTypes = {};

export default Keypad;