import { connect } from 'react-redux';
import ShelfIndex from './shelf_index';
import {requestAllShelves, requestShelf} from '../../actions/shelf_actions';

const mSTP = state => ({
    shelves: Object.values(state.entities.shelves)
});

const mDTP = dispatch => ({
    requestAllShelves: () => dispatch(requestAllShelves()),
    requestShelf: shelfId => dispatch(requestShelf(shelfId))
})

export default connect(mSTP, mDTP)(ShlefIndex)