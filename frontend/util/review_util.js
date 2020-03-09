export const fetchAllReviews = (bookId) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}/reviews`,
        data: {bookId}
    })
)

export const createReview = (bookId, review) => {

    return ($.ajax({
            method: 'POST',
            url: ` /api/books/${bookId}/reviews`,
            data: {review}
        }))
}

export const fetchReview = (bookId,reviewId) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}/reviews/${reviewId}`,
        data: {bookId}
    })
)
    
export const updateReview = (review) => {
    console.log('ajax', review)
    return ($.ajax({
        method:'PATCH',
        url: `/api/reviews/${review.id}`,
        data: {review},
        // contentType: false,
        // processType: false 
    }))
}

export const deleteReview = (bookId, review) => (
    $.ajax({
        method:'DELETE',
        url: `/api/books/${bookId}/reviews/${review.id}`,
    })
)