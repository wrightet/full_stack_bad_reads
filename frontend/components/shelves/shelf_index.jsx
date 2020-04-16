import React from 'React';
import ShelfIndexItem from './shelf_index_item';
import ShelfIndexContainer from './shelf_index_container'

class ShelfIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        <div>
            {
                this.props.shelves.map(shelf => (
                    <ShelfIndexItem
                    shelf={shelf}
                    key={shelf.id}
                    />
                ))
            }
        </div>
    }
}

export default ShelfIndex;