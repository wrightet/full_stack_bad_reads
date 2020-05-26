import { connect } from 'react-redux';
import {requestAllBooks} from '../../actions/book_actions';
import ShelfShow from './shelf_show';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';
import {removeLibrary, updateLibrary, fetchLibrary} from '../../actions/library_actions';



const mSTP = (state, ownProps) => {
    return{
    shelf: state.entities.shelves[ownProps.match.params.id]
}
};

const mDTP = dispatch => ({
    requestShelf: (id) => dispatch(requestAllShelves(id)),
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId)),
    removeLibrary: book => dispatch(removeLibrary(book)),
    updateLibrary: (id, library) => dispatch(updateLibrary(id, library)),
    fetchLibrary: id => dispatch(fetchLibrary(id))

})

export default connect(mSTP, mDTP)(ShelfShow)