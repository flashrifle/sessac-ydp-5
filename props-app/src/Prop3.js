import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Prop3 extends Component {
    render() {
        let { text, valid } = this.props;
        valid = () => {
            console.log('콘솔 띄우기 성공.');
        };
        return (
            <div>
                <div>{text}</div>
                <button onClick={valid}>btn</button>
            </div>
        );
    }
    static defaultProps = {
        text: '이건 기본 text prop입니다.',
        valid: 'default',
    };

    static propTypes = {
        text: PropTypes.string.isRequired,
    };
}

export default Prop3;
