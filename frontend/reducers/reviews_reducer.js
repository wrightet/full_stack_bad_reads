import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, CREATE_REVIEW, DELETE_REVIEW} from '../actions/review_actions';


const reviewReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review});
               
        case DELETE_REVIEW:
            delete Object.assign({},oldState, [action.reviewId])
            return Object.assign({}, oldState)
        default:
            return oldState;
           
    }

}

export default reviewReducer;