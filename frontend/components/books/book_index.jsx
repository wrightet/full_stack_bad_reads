import React from 'react';
import BookIndexItem from './book_index_item';
import BookIndexContainer from './book_index_container'
import {Link} from 'react-router-dom'
class BookIndex extends React.Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.requestAllBooks();
    }
    
    render(){
        const {books} = this.props;
        if (!books){return null;}
       
        return(
        <div className="book-table-div">
            <table className="books-table">
                <thead className="book-index-column-list">
                    <tr className="table-header-row">
                        <th className="book-table-header-column-cover">Cover</th>
                        <th className="book-table-header-column-name">Title</th>
                        <th className="book-table-header-column-name">Author</th>
                        <th className="book-table-header-column-genre">Genre</th>
                    </tr>
                 
                </thead> 
                 <tbody className='books-list-body'>
                     { 
                            books.map(book => (
                                
                                <BookIndexItem
                                book = {book}
                                key = {book.id}
                               />
                            ))
                        }
                 </tbody>
                        
                       
                        
                    
            </table>
        </div>
        )
   
    }
}

export default BookIndex;