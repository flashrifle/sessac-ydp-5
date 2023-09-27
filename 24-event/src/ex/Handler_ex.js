import { Component } from 'react';

class Handler_ex extends Component {
    state = {
        msg: 'hello world',
    };
    changeMsg = (e) => {
        this.setState({ msg: 'good bye' });
    };
    render() {
        const { msg } = this.state;
        return (
            <div>
                <div>{msg}</div>
                <button onClick={this.changeMsg}>버튼</button>
            </div>
        );
    }
}

export default Handler_ex;
