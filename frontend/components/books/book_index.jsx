import React from 'react';
import BookIndexItem from './book_index_item';
import { Link } from 'react-router-dom';
import ShelfIndexContainer from '../shelves/shelf_show_container';
class BookIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            shelves: {}
        }
    }
    componentDidMount(){
        this.props.requestAllBooks();
        this.props.requestAllShelves().then(shelves => {
            this.setState({shelves: shelves})
        });
    }
    
    // render(){
    //     const {books} = this.props;
    //     if (!books){return null;}
    //     return(
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
    //              <tbody className='books-list-body'>
    //                  { 
    //                         books.map(book => (
    //                             <BookIndexItem
    //                             book = {book}
    //                             key = {book.id}
    //                             requestAllReviews = {this.props.requestAllReviews}
    //                            />
    //                         ))
    //                     }
    //              </tbody>
    //         </table>
    //     </div>
    //     )
    // }
    render(){    
        const { books } = this.props;
        // console.log(this.state.shelves.shelves)
        const shelves = this.state.shelves.shelves? Object.values(this.state.shelves.shelves) : [] ;
        console.log('shelves',shelves)
        let groupedBooks = [];
        for (let i = 0; i < books.length; i+=5) {
            groupedBooks.push(books.slice(i, i+5))
            
        }
 
       if (!books){return null;}
       return (
           <div className='book-index'>
                {/* <div className='shelf-index'>
                    <ShelfIndexContainer/>
                 
                </div> */}
                <div className='shelf-links'>
                   <ul>
                    { 
                        shelves.map(shelf => (
                            <li><Link to={`/shelves/${shelf.id}`}>{shelf.name}</Link></li>
                        ))
                    }
                   </ul>
              
                </div>
                {
                    groupedBooks.map(row => (
                          
                        <div className='book-index-row'>
                            {
                            
                            row.map(book => (
                                <BookIndexItem
                                book={book}
                                key={book.id}
                                requestAllReviews={this.props.requestAllReviews}
                                />
                            ))}
                        </div>
                    ))
                }
           </div>
       )
    }
}

export default BookIndex;