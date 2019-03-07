import React, {Component} from 'react';

// import {socket, message} from './api';
import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:3001/');


class Chat extends Component {
    state = {
        value: '',
        answer: []
    }
    changeHandler = e => {
        const value = e.target.value;
        this.setState({value})
    }
    sendHandler = (e) => {
        // e.preventDefault();
        const {value} = this.state;

        socket.emit('message', value);
this.setState({value:''})
    }

    componentDidMount() {
        const {answer} = this.state;
        socket.on('answer', (data) => {
            console.log(data, 'answer');
            answer.push(data)
            this.setState({
                answer,
            })
        })
    }

    render() {
        const {answer} = this.state;
        return (
            <div>
                <ul style={{
                    display: "flex",
                    flexDirection: "column",
                    width: '500px',
                    minHeight: '300px',
                    background: "gray",
                    margin: '0 auto'
                }}>
                    {answer.map((item, index) => (
                        <li
                            key={item + index}
                            style={{color: '#fff'}}
                        >
                            {item}
                        </li>
                    ))
                    }

                </ul>
                <input type="text" value={this.state.value} onChange={this.changeHandler}/>
                <button onClick={this.sendHandler}>send</button>
            </div>
        );
    }
}

Chat
    .propTypes = {};

export default Chat;