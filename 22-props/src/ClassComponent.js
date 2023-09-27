import PropTypes from 'prop-types';
import React, { Component } from 'react';
// class ClassComponent extends React.Component {}
class ClassComponent extends Component {
    student = '홍길동';
    // 클래스형 컴포넌트는 Render 함수 필수
    render() {
        console.log('props', this.props);
        const { name } = this.props;
        return (
            <div>
                <h1>Hi {this.student}!</h1>
                <p>여기는 ClassComponent</p>
                <p>
                    새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
                </p>
                <p>{name}</p>
            </div>
        );
    }

    // static defaultProps = {
    //     name: '기본 이름',
    // };

    // static propTypes = {
    //     name: PropTypes.string,
    // };
}

ClassComponent.defaultProps = {
    name: '기본 이름',
};

// default도 없어야 isRequired 동작
ClassComponent.propTypes = {
    name: PropTypes.string.isRequired,
};

export default ClassComponent;
