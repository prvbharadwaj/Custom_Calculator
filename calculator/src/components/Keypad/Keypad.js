import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Keypad.css';


class Keypad extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            keyboard_input : 0,
            keyboard_input2 : 0,
            operator_flag : false,
            operation_object : {},
            decimal_flag1 : false,
            decimal_flag2 : false
        };
    }



    handleNumberInput = (num) =>{
        if(!this.state.operator_flag) //holds 1st number
        {
            if(this.state.decimal_flag1)
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
            else if(!this.state.decimal_flag1)
            {
                this.setState({
                    keyboard_input : this.state.keyboard_input*10 + num
                });
            }
        }
        else //holds 2nd number
        {
            if(this.state.decimal_flag2)
            {
                if(Number.isInteger(this.state.keyboard_input2))
                {
                    this.setState({
                        keyboard_input2 : this.state.keyboard_input2 + num/10
                    })
                }
                else
                {
                    let temp = parseInt(this.state.keyboard_input2.toString().split(".")[1])
                    let temp2 = temp*10 + num
                    let len = temp2.toString().length
                    this.setState({
                        keyboard_input2 : parseInt(this.state.keyboard_input2) + temp2/(Math.pow(10,len))
                    })
                }
            }
            else if(!this.state.decimal_flag2)
            {
                this.setState({
                    keyboard_input2 : this.state.keyboard_input2*10 + num
                });
            }
        }
    }



    handleDecimalInput = () =>{
        if(!this.state.operator_flag)
        {
            this.setState({decimal_flag1 : true})
        }
        else
            this.setState({decimal_flag2 : true})
    }



    handleClearInput = (code) =>{
        if(!this.state.operator_flag) //clear for 1st number
        {
            if(code === 1)
                this.setState({keyboard_input : 0, decimal_flag1 : false})
            else if(code === 2)
            {
                if(this.state.decimal_flag1 && !Number.isInteger(this.state.keyboard_input))
                {
                    let temp = parseInt(this.state.keyboard_input.toString().split(".")[1])
                    let len = parseInt(temp/10).toString().length
                    let new_dec_part = (parseInt(temp/10))/(Math.pow(10, len))
                    if(new_dec_part === 0)
                    {
                        this.setState({decimal_flag1 : false})
                    }                    
                    this.setState({keyboard_input : parseInt(this.state.keyboard_input) + new_dec_part})           
                }
                else if (this.state.decimal_flag1 && Number.isInteger(this.state.keyboard_input))
                {
                    this.setState({decimal_flag1 : false})
                }
                else if(!this.state.decimal_flag1)
                {
                    this.setState({keyboard_input : Math.floor(this.state.keyboard_input/10)})
                }
            }
        }
        else //clear for 2nd number
        {
             if(code === 1)
                this.setState({keyboard_input2 : 0, decimal_flag2 : false})
            else if(code === 2)
            {
                if(this.state.decimal_flag2 && !Number.isInteger(this.state.keyboard_input2))
                {
                    let temp = parseInt(this.state.keyboard_input2.toString().split(".")[1])
                    let len = parseInt(temp/10).toString().length
                    let new_dec_part = (parseInt(temp/10))/(Math.pow(10, len))
                    if(new_dec_part === 0)
                    {
                        this.setState({decimal_flag2 : false})
                    }                    
                    this.setState({keyboard_input2 : parseInt(this.state.keyboard_input2) + new_dec_part})           
                }
                else if (this.state.decimal_flag2 && Number.isInteger(this.state.keyboard_input2))
                {
                    this.setState({decimal_flag2 : false})
                }
                else if(!this.state.decimal_flag2)
                {
                    this.setState({keyboard_input2 : Math.floor(this.state.keyboard_input2/10)})
                }                
            }
        }
    }



    handleOperatorClear = () =>{
        this.setState({operator_flag : false})
    }
    



    handleOperatorInput = (code) =>{
        // reject operator input if operator flag is true (indicates that there is already an existing operation)
        let a = {}
        switch(code){
            case 1: 
                Object.assign(a, {div : true})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;

            case 2:
                Object.assign(a, {mul : true})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;
            
            case 3:
                Object.assign(a, {add : true})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;
            
            case 4:
                Object.assign(a, {sub : true})
                this.setState({
                    operator_flag : true,
                    operation_object : a
                })
                break;

            default:
                this.setState({
                    operator_flag : false,
                    operation_object : {}
                })
                break;
        }
    }


    handleEqualSign = () =>{
        
    }


    render() {
        return (
            <div className='keypad-master'>                   
                <div className='keypad-container'>
                    <div className='actual-keypad'>
                        <div className='func-rows'>
                            <p onClick={e => this.handleClearInput(1)}>AC</p>
                            <p onClick={e => this.handleClearInput(2)}>C</p>
                            <p onClick={e => this.handleOperatorClear()}>OC</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.handleOperatorInput(1)}>{'\u00F7'}</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.handleNumberInput(7)}>7</p>
                            <p onClick={e => this.handleNumberInput(8)}>8</p>
                            <p onClick={e => this.handleNumberInput(9)}>9</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.handleOperatorInput(2)}>x</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.handleNumberInput(4)}>4</p>
                            <p onClick={e => this.handleNumberInput(5)}>5</p>
                            <p onClick={e => this.handleNumberInput(6)}>6</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.handleOperatorInput(3)}>+</p>
                        </div>
                        <div className='num-rows'>
                            <p onClick={e => this.handleNumberInput(1)}>1</p>
                            <p onClick={e => this.handleNumberInput(2)}>2</p>
                            <p onClick={e => this.handleNumberInput(3)}>3</p>
                            <p className='four-or' style={{fontSize:'19px'}} onClick={e => this.handleOperatorInput(4)}>-</p>
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