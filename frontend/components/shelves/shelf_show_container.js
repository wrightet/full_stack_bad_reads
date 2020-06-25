import { connect } from 'react-redux';
import {requestAllBooks} from '../../actions/book_actions';
import ShelfShow from './shelf_show';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';
import {removeLibrary, updateLibrary, fetchLibrary} from '../../actions/library_actions';
import {requestAllReviews} from '../../actions/review_actions'



const mSTP = (state, ownProps) => {
    return{
    shelf: state.entities.shelves[ownProps.match.params.id]
}
};

const mDTP = dispatch => ({
    requestShelf: (id) => dispatch(requestAllShelves(id)),
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId)),
    removeLibrary: libraryId => dispatch(removeLibrary(libraryId)),
    updateLibrary: (id, library) => dispatch(updateLibrary(id, library)),
    fetchLibrary: id => dispatch(fetchLibrary(id)),
    requestAllReviews: bookId => dispatch(requestAllReviews(bookId))

})

export default connect(mSTP, mDTP)(ShelfShow)