import React from 'react'

class ShelfForm extends React.Component {
    constructor(props){
        super(props)
        this.state = this.props
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log('shelf_form',props)
    }

    update(field){
        return e => this.setState({[field]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let {book} = this.props;
        console.log('book',book)
        // this.props.takeFromShelf()
        
    }
    render(){
        let shelves = this.props.shelves
        if(!shelves){return null}
        return(
             <div className='shelf-dropdown'>
                <form onSubmit={this.handleSubmit} onChange={this.update('name')}>
                <select >
                    {
                       shelves.map(shelf => (
                           
                            <option key={shelf.id} value={`${shelf.name}`}>{shelf.name}</option>
                        ))
                    }
                </select>
                </form>
            </div>
        
        )
           
    }
}

export default ShelfForm;