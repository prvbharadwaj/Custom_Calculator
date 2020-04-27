import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './OutputScreen.css';

class OutputScreen extends Component {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            op : '',
            num1 : 0,
            num2 : 0,
            op_flag : false
        };
    }

    render() {
        return (
            <div className='screen-master'>
                <div className='operator-dash'>
                    <p className={(this.state.op === 'div')?'active':'inactive'}>{'\u00F7'}</p>
                    <p className={(this.state.op === 'mul')?'active':'inactive'}id='test'>x</p>
                    <p className={(this.state.op === 'add')?'active':'inactive'}>+</p>
                    <p className={(this.state.op === 'sub')?'active':'inactive'}>-</p>
                </div>
                <div className='display-section'>
                    
                </div>
            </div>
        );
    }
}

OutputScreen.propTypes = {};

export default OutputScreen