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

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(this.props)
        console.log(this.state)
        this.props.createShelf(this.state)
        // window.location.reload()
            // this.setState({name: shelf.name, user_id:shelf.user_id})
           
            
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