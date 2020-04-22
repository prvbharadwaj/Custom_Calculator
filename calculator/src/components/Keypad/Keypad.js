import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Keypad.css';


class Keypad extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            keyboard_input : 0,
            decimal_flag : false
        };
    }

    handleNumberInput = (num) =>{
        if(this.state.decimal_flag)
        {
            if(Number.isInteger(this.state.keyboard_input))
            {
                this.setState({
                    keyboard_input : this.state.keyboard_input + num/10
                })
            }
            else
            {
                let temp = parseInt(this.state.keyboard_input.toString().split(".")[1])
                let temp2 = temp*10 + num
                let len = temp2.toString().length
                this.setState({
                    keyboard_input : parseInt(this.state.keyboard_input) + temp2/(Math.pow(10,len))
                })
            }
        }
        else if(!this.state.decimal_flag)
        {
            this.setState({
                keyboard_input : this.state.keyboard_input*10 + num
            });
        }
    }

    handleDecimalInput = () =>{
        this.setState({decimal_flag : true})
    }

    handleClearInput = (code) =>{
        if(code === 1)
            this.setState({keyboard_input : 0, decimal_flag : false})
        else if(code === 2)
        {
            if(this.state.decimal_flag && !Number.isInteger(this.state.keyboard_input))
            {
                let temp = parseInt(this.state.keyboard_input.toString().split(".")[1])
                let len = parseInt(temp/10).toString().length
                let new_dec_part = (parseInt(temp/10))/(Math.pow(10, len))
                if(new_dec_part === 0)
                {
                    this.setState({decimal_flag : false})
                }                    
                this.setState({keyboard_input : parseInt(this.state.keyboard_input) + new_dec_part})           
            }
            else if (this.state.decimal_flag && Number.isInteger(this.state.keyboard_input))
            {
                this.setState({decimal_flag : false})
            }
            else if(!this.state.decimal_flag)
            {
                this.setState({keyboard_input : Math.floor(this.state.keyboard_input/10)})
            }
        }
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
                            <p onClick={e => this.handleDecimalInput()}>.</p>
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