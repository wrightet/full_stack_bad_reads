export const fetchBookInLibrary = (shelved) => (
    $.ajax({
        method: 'POST',
        url:`/api/library/${shelved.id}`,
        date:{shelved}
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