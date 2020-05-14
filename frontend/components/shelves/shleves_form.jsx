import React from 'react'

class ShelfForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let shelves = this.props.shelves
        // console.log('shelves', shelves)
        if(!shelves){return null}
        return(
             <div className='shelf-dropdown'>
                <select name="" id="">
                    {
                       shelves.map(shelf => (
                           
                            <option value={`${shelf.name}`}>{shelf.name}</option>
                        ))
                    }
                </select>
            </div>
        
        )
           
    }
}

export default ShelfForm;