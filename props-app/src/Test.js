import React, { Component } from 'react';

class Test extends Component {
    name = '이재민';
    my_style = {
        backgroundColor: 'blue',
        color: 'orange',
        fontSize: '40px',
        padding: '12',
    };
    render() {
        return <div style={this.my_style}>{this.name}</div>;
    }
}
export default Test;
