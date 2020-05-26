import React from 'React';
import ShelfIndexItem from './shelf_index_item';
import {Link} from 'react-router-dom'

class ShelfShow extends React.Component {
    constructor(props){
        super(props)
        console.log('shelf show', props)
    }

    uniqueBooks(books){
        // anticipating that if duplicates are in a shelf the 
        // dup will appear when the first is removed
        let uniq = [];
        let ids = [];
        books.forEach(book => {
            if (!ids.includes(book.id)){
                uniq.push(book);
                ids.push(book.id);
            }
        })
        return uniq;
    }

    componentDidMount() {
        this.props.requestAllBooks();
        this.props.requestShelf(this.props.match.params.id);
    }
    render(){
        if(!this.props.shelf){return null}
        else {
             let {books} = this.props.shelf
             console.log('books', books)
             let new_books = this.uniqueBooks(books);
             console.log(new_books)
            return(new_books.length !== 0 ?   
                <div className="book-table-div">
                    <table className="books-table">
                        <thead className="book-index-column-list">
                            <tr className="table-header-row">
                                <th className="book-table-header-column-cover">Cover</th>
                                <th className="book-table-header-column-name">Title</th>
                                <th className="book-table-header-column-name">Author</th>
                                <th className="book-table-header-column-rating">Rating</th>
                                <th className="book-table-header-column-review">Review</th>
                                <th className="book-table-header-column-genre">Genre</th>
                            </tr>
                        </thead>
                        <tbody className='books-list-body'>
                            {
                                new_books && new_books.map(book => (
                                    <ShelfIndexItem
                                        book={book}
                                        key={book.id}
                                        requestAllReviews={this.props.requestAllReviews}
                                        updateLibrary={this.props.updateLibrary}
                                        removeLibrary={this.props.removeLibrary}
                                        fetchLibrary={this.props.fetchLibrary}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                : 
                <div className='empty-shelf-div'>
                    <h1 className='no-items'>No matching items!</h1>
                </div>
            )
        }
   
    }
}

export default ShelfShow;

// return (
//     <div className="book-table-div">

//         <table className="books-table">
//             <thead className="book-index-column-list">
//                 <tr className="table-header-row">
//                     <th className="book-table-header-column-cover">Cover</th>
//                     <th className="book-table-header-column-name">Title</th>
//                     <th className="book-table-header-column-name">Author</th>
//                     <th className="book-table-header-column-rating">Rating</th>
//                     <th className="book-table-header-column-review">Review</th>
//                     <th className="book-table-header-column-genre">Genre</th>


//                 </tr>
//             </thead>
//             <tbody className='books-list-body'>
//                 {
//                     books.map(book => (
//                         <ShelfIndexItem
//                             book={book}
//                             key={book.id}
//                             requestAllReviews={this.props.requestAllReviews}
//                         />
//                     ))
//                 }
//             </tbody>
//         </table>
//     </div>
// )