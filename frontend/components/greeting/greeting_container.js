import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import {requestAllShelves } from '../../actions/shelf_actions';
import Greeting from './greeting';

const mSTP = (state) => ({
   
    currentUser: state.entities.users[state.session.id]

});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    requestAllShelves: () => dispatch(requestAllShelves)

});

export default connect (mSTP, mDTP)(Greeting);
