import { connect } from 'react-redux';
import {requestShelf, requestAllShelves, deleteShelf, createShelf, updateShelf} from '../../actions/shelf_actions';
import AllShelves from './all_shelves';


const mSTP = (state) => {
   
    return({
        shelves: Object.values(state.entities.shelves),
        user: state.session.id
    })
}

const mDTP = dispatch => ({
    createShelf: shelf => dispatch(createShelf(shelf)),
    deleteShelf: shelf => dispatch(deleteShelf(shelf)),
    updateShelf: shelf => dispatch(updateShelf(shelf)),
    requestAllShelves: () => dispatch(requestAllShelves()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId))
})

export default connect(mSTP, mDTP)(AllShelves);