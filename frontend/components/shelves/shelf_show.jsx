import React from 'react';
import ShelfIndexItem from './shelf_index_item';
import {Link} from 'react-router-dom'

class ShelfShow extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.requestAllBooks();
        this.props.requestShelf(this.props.match.params.id);
    }

    render(){
        if(!this.props.shelf){return null}
        else {
             let {books} = this.props.shelf
             let shelf = this.props.shelf
        
            return(books.length !== 0 ?   
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
                                books && books.map(book => (
                                    <ShelfIndexItem
                                        book={book}
                                        shelf={shelf}
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