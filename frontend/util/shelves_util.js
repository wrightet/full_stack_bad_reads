export const fetchAllShelves = () => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${currentUser.id}/book_shelves`
    })
   
)

export const fetchShelf = id => (
    $.ajax({
        method: 'GET',
        url: `/api/book_shelves/${id}`
    })
)

export const createShelf = (shelf) => (
    $.ajax({
        method: 'POST',
        url: '/api/book_shelves',
        data: {shelf}
    })
)

export const updateShelf = (shelf) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/book_shelves/${shelf.id}`,
        data: {shelf}
    })
)

export const deleteShelf = shelfId => (
    $.ajax({
        method:'DELETE',
        url:`/api/book_shelves/${shelfId}`
    })
)