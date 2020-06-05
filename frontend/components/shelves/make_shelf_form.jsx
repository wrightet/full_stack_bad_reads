import React from 'react';

class MakeShelfForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            user_id: this.props.user.id
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    // componentDidMount(){
    //     this.props.requestAllShelves()
    // }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createShelf(this.state)
        window.location.reload()    
    }
    render(){
        return( 
            <div>
                <form value={this.state.name} onSubmit={this.handleSubmit}>
                    <label htmlFor="">
                        <input type="text" value={this.state.name} onChange={this.update('name')}/>
                    </label>
                    <input type="submit" value='add'/>
                </form>
            </div>
        )
      
    }
}

export default MakeShelfForm;