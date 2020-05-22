import React from 'react'

class ShelfForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            book_id:this.props.book.id,
            id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.props.createLibrary = this.props.createLibrary.bind(this);
        // console.log('shelf_form',props)
    }

    update(field){
       
        return e => {
        //     console.log('e',e.target.value)
        //     console.log('book',this.props.book)
        //    console.log('field',field)
            this.setState({ [field]: e.target.value })
            this.props.createLibrary({book_id: this.state.book_id, shelf_id: e.target.value})
          
            
           
        }
    }

    handleSubmit(e){
        e.preventDefault();
        setTimeout(this.update('id'),1).then(() => this.props.createLibrary(this.state))
        
        console.log('state', this.state)
        // this.props.createLibrary(this.state)
        // this.props.takeFromShelf()
        
    }
    render(){
        let shelves = this.props.shelves
        if(!shelves){return null}
        return(
             <div className='shelf-dropdown'>
                <form  onChange={this.update('id')}>
                <select >
                    {
                       shelves.map(shelf => (
                            <option key={shelf.id} value={`${shelf.id}`}>{shelf.name}</option>
                        ))
                    }
                </select>
                <input type="submit" />
                </form>
            </div>
        
        )
           
    }
}

export default ShelfForm;