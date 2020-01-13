import React from 'react';
import BookIndexItem from './book_index_item';
import BookIndexContainer from './book_index_container'

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
        <div>
            <table className="books-table">
                <thead className="book-index-column-list">
                    <tr>
                        <th className="book-listed-elements">cover</th>
                        <th className="book-listed-elements">title</th>
                        <th className="book-listed-elements">author</th>
                        <th className="book-listed-elements">genre</th>
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