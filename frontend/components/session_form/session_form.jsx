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
    handleDemo(e) {
        e.preventDefault();
        this.props.login({ first_name:'Demo', last_name:'Demo', email: 'demo', password: '123456' })
        .then(() => this.props.history.push('/') );
        // this.props.login({  email: 'demo', password: '123456' });
        
    }

    renderErrors() {
        return (
            <div className='errors'>
                <ul >
                    {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
                </ul>
            </div>
          
        );
    }



    render() {
       
        return (
            <div className="book-fire">
                <img src={window.images.bookfireURL} />
          
            <div className="session-form-div">
                <form onSubmit={this.handleSubmit} >
                    <div>
                        {this.props.errors.length > 0 ? this.renderErrors() : null}
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
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.update('email')}
                                
                            />
                            </li>
                            <li>     
                                <input type="password"
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.update('password')}
                                
                            /></li>
                            <li>
                                <input type="submit" value={this.props.formType} className="session-submit-button"/>
                                <button className="demo-button" onClick={this.handleDemo}>Demo</button>
                                
                            </li>
                         
                        </ul>
                      
                    </div>

                        
                </form>
                    
            </div> 
            
        </div>
        );
    }
}

export default SessionForm;
