import React from 'react';
import AuthForm from './components/AuthForm';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            credentials: {
                jhernandez: {
                    password: 'supersecret',
                }
            }
        }
    }
    
    render() {
        return (
            <div className="App">
              <AuthForm handleSubmit={this._checkCredentials}/>
            </div>
        );        
    }
    

    _checkCredentials = (username, password) => {
        // Find a user inside app state, check password if found
        console.log('checking username and password')
        const userObject = this.state.credentials[username]
                          // this.state.credentials.roncagle

        if (userObject && (userObject.password === password)) {
          return {
            valid: true,
            message: "Logged in"
          }
        } else {
          return {
            valid: false,
            message: "Bad username or password"
          }
        }
    }
}

export default App;
