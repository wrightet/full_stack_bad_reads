import {RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, CREATE_REVIEW} from '../actions/review_actions';


const reviewReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ALL_REVIEWS:
            return action.reviews;
        case RECEIVE_REVIEW:
            return Object.assign({}, oldState, {[action.review.id]: action.review});
               
    
        default:
            return oldState;
           
    }

}

export default reviewReducer;