import { connect } from 'react-redux';
 
import ShelfShow from './shelf_show';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';

const mSTP = (state, ownProps) => {
    console.log(ownProps.match.params.id)
    console.log('shelves',state.entities.shelves)
    
    return{
    shelf: state.entities.shelves[ownProps.match.params.id]
    // shelf: state.entities.shelves
    
}
};

const mDTP = dispatch => ({
    requestShelf: (id) => dispatch(requestAllShelves(id)),
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId))
})

export default connect(mSTP, mDTP)(ShelfShow)