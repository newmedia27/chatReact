import React, {Component} from 'react';

import {message} from './api';


class Chat extends Component {
    state = {
        value: '',
    }
    changeHandler = e => {
        const value = e.target.value;
        this.setState({value})
    }
    sendHandler = (e) => {
        e.preventDefault();
        const {value} = this.state;
        message(value);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.changeHandler}/>
                <button onClick={this.sendHandler}>send</button>
            </div>
        );
    }
}

Chat.propTypes = {};

export default Chat;