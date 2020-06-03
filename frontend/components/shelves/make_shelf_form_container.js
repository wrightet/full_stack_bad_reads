import { connect } from 'react-redux';
import { createShelf, deleteShelf, updateShelf} from '../../actions/shelf_actions';

const mSTP = (state) => {
    const user = state.entities.users[state.session.id];
    return({
        user: user,
        shelves: Object.values(state.entities.shelves),
    })
}

const mDTP = dispatch => ({
    createShelf: shelf => dispatch(createShelf(shelf)),
    deleteShelf: shelf => dispatch(deleteShelf(shelf)),
    updateShelf: shelf => dispatch(updateShelf(shelf))
})

export default connect(mSTP, mDTP)(MakeShelfForm);