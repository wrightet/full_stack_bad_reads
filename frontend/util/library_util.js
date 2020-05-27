export const fetchLibrary = (id) => (
    $.ajax({
        method: 'GET',
        url:`/api/libraries/${id}`,
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

export const removeShelvedBook = (libraryId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/libraries/${libraryId}`
    })
)
