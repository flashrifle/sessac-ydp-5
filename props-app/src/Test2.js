import React, { Component } from 'react';
import coding from './sample2.png';

class Test2 extends Component {
    name = '이재민';
    my_style = {
        color: 'orange',
        fontSize: '40px',
        marginTop: '10',
    };
    render() {
        return (
            <div style={this.my_style}>
                <h2>안녕하세요</h2>
                <img style={{ width: '200px' }} src={coding}></img>
            </div>
        );
    }
}

export default Test2;
