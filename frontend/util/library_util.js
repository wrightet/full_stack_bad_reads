export const fetchBookInLibrary = (shelved) => (
    $.ajax({
        method: 'POST',
        url:`/api/library/${shelved.id}`,
        date:{shelved}
    })
)

export const createLibrary = (library) => (
    $.ajax({
        method: 'POST',
        url:'/api/library',
        data: {library}
    })
)

export const updateLibrary = (id, library) => (
    $.ajax({
        method:'PATCH',
        url:`/api/library/${id}`,
        data:{library}
    })
)
// export const fetchBookInLibrary = (shelved) => (
//     $.ajax({
//         method: 'POST',
//         url:`/api/book_shelves`,
//         date:{shelved}
//     })
// )
export const removeShelvedBook = (shelved) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/library/${shelved.id}`
    })
)
// export const removeShelvedBook = (shelved) => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/book_shelves/${shelved.id}`
//     })
// )