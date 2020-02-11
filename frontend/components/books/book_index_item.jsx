import React from 'react';
import { Link } from 'react-router-dom'


class BookIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.keyFinder = this.keyFinder.bind(this)
    }

    keyFinder(url){
        let val = url.split('.')[0];
        let keys = Object.keys(window.images)
        let newKeys = keys.map(key => {
            return key.split('URL')[0];
        })
        
    
       for (let i = 0; i < keys.length; i++) {
           if (val === newKeys[i]){
               return window.images[keys[i]]
           }    
       }
        return window.images.openbookURL;
       
    }
    render(){
       
        let book = this.props.book
        return (
            <tr className="book-row">
                <td><Link to={`/books/${book.id}`}><img src={this.keyFinder(book.url)} alt="" className="book-photo" /></Link></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
            </tr>
        )
    }
}

export default BookIndexItem;
