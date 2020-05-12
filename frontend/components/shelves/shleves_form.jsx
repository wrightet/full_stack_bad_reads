import React from 'react'

class ShelfForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let shelves = this.props.shelves
        console.log('shelves', this.props)
        if(!shelves){return null}
        return(
             <div className='shelf-dropdown'>
                <select name="" id="">
                    {
                       shelves && shelves.map(shelf => {
                            <option value={`${shelf.id}`}>{shelf.name}</option>
                        })
                    }
                </select>
            </div>
        
        )
           
    }
}

export default ShelfForm;