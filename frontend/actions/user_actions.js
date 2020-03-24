import * as APIUtil from '../util/user_util';

export const RECEIVE_USER = 'RECEIVE_USER';

const receive_user = (user) => ({
    type: RECEIVE_USER,
    user
})

export const requestUser = id => dispatch => {
    return APIUtil.fetchUser(id).then(user => dispatch(receive_user(user)))
}