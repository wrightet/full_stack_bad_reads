export const fetchAllBooks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/books'
    })
);
export const createBook = (book) => (
    $.ajax({
        method: 'POST',
        url: 'api/books',
        data: { book }
    })
);
export const fetchBook = id => (
    $.ajax({
        method: 'GET',
        url: `api/books/${id}`
    })
);

export const updateBook = book => (
    $.ajax({
        method: 'Patch',
        url: `api/books/${book.id}`,
        data: {book},
        contentType: false,
        processData: false
    })
)