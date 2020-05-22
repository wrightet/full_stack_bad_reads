export const fetchBookInLibrary = (shelved) => (
    $.ajax({
        method: 'POST',
        url:`/api/libraries/${shelved.id}`,
        date:{shelved}
    })
)

export const createLibrary = (library) => (
    $.ajax({
        method: 'POST',
        url:'/api/libraries',
        data: {library}
    })
)

export const updateLibrary = (id, library) => (
    $.ajax({
        method:'PATCH',
        url:`/api/libraries/${id}`,
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
        url: `/api/libraries/${shelved.id}`
    })
)
// export const removeShelvedBook = (shelved) => (
//     $.ajax({
//         method: 'DELETE',
//         url: `/api/book_shelves/${shelved.id}`
//     })
// )