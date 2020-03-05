import * as APIUtil from '../util/review_util';

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
const receiveReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

const removeReview = (reviewId) => ({
    type: DELETE_REVIEW,
    reviewId
})

export const requestAllReviews = bookId => dispatch => {
  
    return APIUtil.fetchAllReviews(bookId).then(reviews => 
        dispatch(receiveReviews(reviews)))
};

export const requestReview = (bookId, reviewId) => dispatch => {
    return APIUtil.fetchReview(bookId, reviewId).then(review => 
        dispatch(receiveReview(review)))
}
export const createReview = (bookId, review) => dispatch => {
    return APIUtil.createReview(bookId, review).then(review =>
        dispatch(receiveReview(review)))
};
export const updateReview = (bookId, review) => dispatch => {
    return APIUtil.updateReview(bookId, review).then(review =>
        dispatch(receiveReview(review)))
};
export const deleteReview = (bookId, review) => dispatch => {
    return APIUtil.deleteReview(bookId, review).then(review =>
        dispatch(removeReview(review.id)))
}