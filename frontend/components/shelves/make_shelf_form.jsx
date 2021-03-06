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
            <div className='make-shelf-form'>
                <form value={this.state.name} onSubmit={this.handleSubmit}  className='shelf-form'>
                    <label htmlFor="">
                        <input type="text" className="make-shelf-input" value={this.state.name} 
                        placeholder='Add a shelf' onChange={this.update('name')}/>
                    </label>
                    <input type="submit" value='add' className='make-shelf-submit'/>
                </form>
            </div>
        )
      
    }
}

export default MakeShelfForm;