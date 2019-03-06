import React, {Component} from 'react';
import './App.css';
import Chat from "./Chat";

class App extends Component {
    state = {
        users: [],
        openChat: false
    }

    componentDidMount() {
        fetch('/users')
            .then(res => res.json())
            .then(users => this.setState({users}));
    }

    render() {
        const {openChat} = this.state
        return (
            <div className="App">
                {
                    openChat
                        ? <Chat/>
                        : <> <h1>Users</h1>
                            {this.state.users.map(user =>
                                <div key={user.id}>{user.username}</div>
                            )}

                        </>
                }
                <button onClick={() => this.setState({openChat: !this.state.openChat})}>Chat</button>
            </div>
        );
    }
}

export default App;
