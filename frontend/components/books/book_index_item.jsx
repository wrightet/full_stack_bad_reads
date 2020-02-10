import React from 'react';
import { Link } from 'react-router-dom'
import BookIndexContainer from './book_index_container';

class BookIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        return (
            <tr className="book-row">
                <td><Link to={`/books/${book.id}`}><img src={window.images.openbookURL} alt="" className="book-photo" /></Link></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
            </tr>
        )
    }
}

export default BookIndexItem;
{/* <img src={window.images.openbookURL} className="book-photo"/> */}