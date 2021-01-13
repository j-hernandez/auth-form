import React from 'react'

class AuthForm extends React.Component{
    constructor(props) {
        super(props);
        // initial state goes here
        this.state = {
            username: '',
            password: '',
            response: {
                message: '',
                valid: false
            }
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this._submitForm}>
                    <label>
                        Username:
                        <input name="username" type="text" value={this.state.username} onChange={(event) => {
                            this._updateField('username', event.target.value)
                        }} />
                    </label>
                    <label>
                        Password:
                        <input name="password" type="password"  value={this.state.password} onChange={(event) => {
                            this._updateField('password', event.target.value);
                        }}/>
                    </label>
                    <input type="submit" />
                    <Message {...this.state.response} />
                </form>
            </div>
        )
    }

    _submitForm = (event) => {
        event.preventDefault();
        const response = this.props.handleSubmit(this.state.username, this.state.password);
        // From App.js
        // _checkCredentials(username, password)
        this.setState({
            response
        }, () => {
            console.log(this.state);
        });

    }

    _updateField = (field, value) => {
        // if state[field] >> then update else create state[field]
        this.setState({
            [field]: value,
            response: {
                message: '',
                valid: false
            }
        }, () => {

            console.log(`${field} is now ${value}`)
            console.log(this.state)
        })
    }


}

export default AuthForm;

class Message extends React.Component {

    render() {
        const { message, valid } = this.props;
        // the same as
        // const message = this.props.message;
        // const valid = this.props.valid;

        if (message) {
            return (
                // Show the message to the end user
                // if (valid === true) {
                //     class = 'success'
                // } else {
                //     class = 'error'
                // }
                <h3 className={valid ? 'success' : 'error'}>{message}</h3>

            )
        } else {
            return null;
        }
    }

}
