import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name:'',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }



    render() {
        let hide = 'signup';
        if (this.props.formType === 'login'){
            hide = 'login';
        }
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                   
         
                   <h3 id='signin-login-form-title'>{this.props.formType}</h3>
                    <div className="login-form">
                        
                        <label id={hide}>First Name:
                            <input type="text"
                                value={this.state.firstName}
                                onChange={this.update('first_name')}
                                className="login-input"
                            />
                        </label>
                        
                        <label id={hide}>Last Name:
                            <input type="text"
                                value={this.state.lastName}
                                onChange={this.update('last_name')}
                                className="login-input"
                            />
                        </label>
                       <br/>
                        <label>Email:
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                            />
                        </label>
                        
                        <label>Password:
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                            />
                        </label>
                       
                        <input className="session-submit" type="submit" value={this.props.formType} />
                    </div>
                    <img src="assets/book_fire.gif" alt=""/>
                </form>
            </div>
        );
    }
}

export default SessionForm;
