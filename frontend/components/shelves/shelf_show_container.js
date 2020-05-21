import { connect } from 'react-redux';
import {requestAllBooks} from '../../actions/book_actions';
import ShelfShow from './shelf_show';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';

const mSTP = (state, ownProps) => {
    return{
    shelf: state.entities.shelves[ownProps.match.params.id]
}
};

const mDTP = dispatch => ({
    requestShelf: (id) => dispatch(requestAllShelves(id)),
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId))
})

export default connect(mSTP, mDTP)(ShelfShow)