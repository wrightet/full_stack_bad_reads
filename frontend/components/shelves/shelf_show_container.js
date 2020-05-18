import { connect } from 'react-redux';
 
import ShelfShow from './shelf_show';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';

const mSTP = (state, ownProps) => {
    console.log('state', state, 'ownprops', ownProps)
    return{
    shelf: state.entities.shelves[ownProps.match.params.id]
}};

const mDTP = dispatch => ({
    requestAllShelves: () => dispatch(requestAllShelves()),
    requestAllBooks: () => dispatch(requestAllBooks()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId))
})

export default connect(mSTP, mDTP)(ShelfShow)