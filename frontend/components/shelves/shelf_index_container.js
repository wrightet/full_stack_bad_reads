import { connect } from 'react-redux';
import{ requestAllBooks } from '../../actions/book_actions';
import ShelfIndex from './shelf_index';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';

const mSTP = state => ({
    shelves: Object.values(state.entities.shelves)
});

const mDTP = dispatch => ({
    requestAllShelves: () => dispatch(requestAllShelves()),
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId))
})

export default connect(mSTP, mDTP)(ShelfIndex)