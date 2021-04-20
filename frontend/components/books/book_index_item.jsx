import React from 'react';
import { Link } from 'react-router-dom'
import { IndivRating } from '../stars/stars';
import ShelfForm from '../shelves/shelf_form';


class BookIndexItem extends React.Component {
    constructor(props){
        super(props);
        this.keyFinder = this.keyFinder.bind(this);
        this.avgRating = this.avgRating.bind(this);
    
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

    render(){
       
        let book = this.props.book
       
        return (
    
            <div className='book-index-item'>
                <div className='book-index-photo'>
                    <Link to={`/books/${book.id}`}><img src={book.photoURL} alt="" className="book-photo" /></Link>
                </div>
              
                <IndivRating
                    min={1}
                    max={5}
                    value={Math.round(this.avgRating())}/>
                <div>{this.avgRating()}</div>
                <ShelfForm
                    book={book}
                    shelves={this.props.shelves}
                    createLibrary={this.props.createLibrary}
                />
            </div>

        )
    }
}

export default BookIndexItem;
