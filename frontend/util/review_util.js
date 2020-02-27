export const fetchAllReviews = (bookId) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}/reviews`
    })
)

export const createReview = (bookId, review) => {
//    debugger
    return ($.ajax({
            method: 'POST',
            url: ` /api/books/${bookId}/reviews`,
            data: {review}
        }))

}

export const fetchReview = (bookId) => (
    $.ajax({
        method: 'GET',
        url: `/api/books/${bookId}/reviews`
    })
)
    
   


export const updateReview = (bookId, review) => (
    $.ajax({
        method:'PATCH',
        url: `/api/books/${bookId}/reviews/${review.id}`,
        data: {review},
        contentType: false,
        processType: false
    })
)