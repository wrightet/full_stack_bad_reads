export const fetchAllBooks = () => (
    $.ajax({
        method: 'GET',
        url: 'api/books'
    })
);
export const createBook = (book) => (
    $.ajax({
        method: 'GET',
        url: 'api/books',
        data = { book }
    })
);
export const fetchBook = id => (
    $.ajax({
        method: 'GET',
        url: `api/books/${id}`
    })
);