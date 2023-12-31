import React, { Component } from 'react';

export default class RefSample3 extends Component {
    handleFocus = () => {
        console.log(this); // 컴포넌트 자기 자신을 의미한다
        this.inputRef.focus();
    };
    render() {
        return (
            <div>
                <p>클래스형 컴포넌트에서 버튼 클릭시 input에 focusing처리</p>
                <input
                    type="text"
                    ref={(ref) => {
                        // inputRef : ref로 사용될 변수 이름
                        this.inputRef = ref;
                    }}
                />
                <button onClick={this.handleFocus}>Focus</button>
            </div>
        );
    }
}
