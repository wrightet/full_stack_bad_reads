import React from 'react';
// import BookShowContainer from './book_index_container';

import { Link, withRouter } from 'react-router-dom';
var faker = require('faker');
class BookShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {book: this.props.book};
        this.booleanFlip = this.booleanFlip.bind(this);
    }

    componentDidMount() {
        
        this.props.requestBook(this.props.match.params.id)
       
    }

    booleanFlip(e){
        let book = this.props.book;

        if (book.e === false) {return true}
        else {return false}

    }

    render(){
        let book = this.props.book;
        if (!book) {return null;}
        
        return (
        <div className="book-content">
            <img src={window.images.openbookURL}/>
            <div className="book-show-content">
            <h1>{book.title}</h1>
            <h1>by {book.author}</h1>
            <h1>{book.genre}</h1>
            <p>{`This book is about ${faker.name.findName()}. They said, " ${faker.hacker.verb()} ${faker.hacker.phrase()}". It was utter nonsense.`}</p>
        
            <select name="" id="">

                <option value="haveNotRead">Have Not Read</option>
                <option value="read">Read</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want To Read</option>
            </select>
            </div>
           
        </div>
        )
     
    }
}

export default withRouter(BookShow);