import React from 'react';
import { Link } from 'react-router-dom'
import {Rating} from '../stars/stars';

class ShelfIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.keyFinder = this.keyFinder.bind(this);
        this.avgRating = this.avgRating.bind(this);
        this.removeBook = this.removeBook.bind(this);
        console.log('shelf index',props)
    }

    keyFinder(url) {
        let val = url.split('.')[0];
        let keys = Object.keys(window.images)
        let newKeys = keys.map(key => {
            return key.split('URL')[0];
        })


        for (let i = 0; i < keys.length; i++) {
            if (val === newKeys[i]) {
                return window.images[keys[i]]
            }
        }
        return window.images.openbookURL;

    }

    avgRating() {
        let reviews = this.props.book.reviews

        if (reviews) {
            let count = 0;
            let length = reviews.length;
            reviews.map(review => {
                count += review.rating
            }
            );
            let num = parseFloat(count / length);
            return num.toFixed(2)
        }
        else { return null }

    }

    removeBook(){
        console.log(this.props)
        this.props.fetchLibrary(this.props)
        .then(library => this.props.removeLibrary(library))
      
        
    }

    render(){
        let book = this.props.book;
        return(
        <tr className="book-row">
                <td><Link to={`/books/${book.id}`}><img src={this.keyFinder(book.url)} alt="" className="book-photo" /></Link></td>
                <td><Link to={`/books/${book.id}`}>{book.title}</Link></td>
                <td><Link to={`/books/${book.id}`}>{book.author}</Link></td>
                <td className='index-stars'>     
                    <Rating
                    min={1}
                    max={5}
                    value={Math.round(this.avgRating())}/>
                    {this.avgRating()}
                </td>
                <td className='index-review'>
                    <Link to={`/books/${book.id}/review/new`} className='write-review'>Write a review</Link>
                </td>
                <td>{book.genre}</td>
                <td><button onClick={() => this.removeBook()}>X</button></td>


            </tr>
        )
    }
}

export default ShelfIndexItem;