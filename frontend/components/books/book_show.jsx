import React from 'react';
// import BookShowContainer from './book_index_container';

import { Link, withRouter } from 'react-router-dom';
var faker = require('faker');
class BookShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {book: this.props.book}
    }

    componentDidMount() {
        
        this.props.requestBook(this.props.match.params.id)
       
    }

    render(){
        let book = this.props.book;
        if (!book) {return null;}
        return (
        <div>
            <img src={window.images.openbookURL}/>
            <h1>{book.title}</h1>
            <h1>{book.author}</h1>
            <h1>{book.genre}</h1>
            <p>{`This book is about ${faker.name.findName()}. They go on a quest to ${faker.hacker.verb()} cheese.`}</p>
        </div>
        )
     
    }
}

export default withRouter(BookShow);