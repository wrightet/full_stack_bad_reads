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
       
        return (
            <div className="session-form-div">
                <form onSubmit={this.handleSubmit} >
                   
                    {this.renderErrors()}
                   
                    <div>
                        <h2 className="signup-title">New here? Create a free account!</h2>
                        <ul className="session-form-ul">
                            <li> <input type="text"
                                placeholder="First Name"
                                value={this.state.firstName}
                                onChange={this.update('first_name')}
                                
                            /></li>
                            <li>  <input type="text"
                            placeholder="Last Name"
                                value={this.state.lastName}
                                onChange={this.update('last_name')}
                                
                            /></li>
                            <li>
                                  <input type="text"
                            placeholder="Email"
                                value={this.state.email}
                                onChange={this.update('email')}
                                
                            />
                            </li>
                            <li>     <input type="password"
                            placeholder="Password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                
                            /></li>
                            <li>
                                <input type="submit" value={this.props.formType} className="session-submit-button"/>
                            </li>
                        </ul>
                    </div>
                   
                </form>
            </div>
        );
    }
}

export default SessionForm;
