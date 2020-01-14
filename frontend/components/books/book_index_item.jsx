import React from 'react';

import BookIndexContainer from './book_index_container';

class BookIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        
        const book = this.props.book;
        return (
            <tr className="book-row">
                <td><img src={window.images.openbookURL} alt=""/></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
            </tr>
        )
    }
}

export default BookIndexItem;