import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
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

    handleDemo(){
        // const user = Object.assign({email: 'demo', password: '123456'}, this.state)
        this.props.processForm({email: 'demo', password:'123456'});
    }


    render() {
        
        return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">

                    {this.renderErrors()}
                  
                    <div className="login-form">
                        <ul className="login-list">
                            <li>     <input type="text"              
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.update('email')}
                        className="login-input"
                                                />
                            </li>
                            <li>
                                     <input type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        className="login-input"
                                                />
                            </li>
                            <li>
                                <input className="login-submit-button" type="submit" value={this.props.formType} />
                                <button className="login-submit-button" onClick={this.handleDemo}>Demo</button>
                            </li>
                        </ul> 
                    </div>

                </form>
            </div>
        );
    }
}

export default LoginForm;