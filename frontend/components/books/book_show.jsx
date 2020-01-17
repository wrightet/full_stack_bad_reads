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
        // debugger
        let book = this.props.book;

        if (book[e.target.value] === false) {
            book[e.target.value] = true;
            const formData = new formData();
            formData.append('book[id]', book.id);
            formData.append('book[title]', book.title);
            formData.append('book[author]', book.author);
            formData.append('book[genre]', book.genre); 
            formData.append('book[read]', false);
            formData.append('book[currently_reading]', false);
            formData.append('book[want_to_read]', false);

            formData.append(`book[${e.target.value}]`, true);
            
            this.props.updateBook(formData)
        } 
        else {
            book[e.target.value] = false;
            const formData = new formData();
            formData.append('book[id]', book.id);
            formData.append('book[title]', book.title);
            formData.append('book[author]', book.author);
            formData.append('book[genre]', book.genre);
            formData.append('book[read]', true);
            formData.append('book[currently_reading]', true);
            formData.append('book[want_to_read]', true);

            formData.append(`book[${e.target.value}]`, false);

            this.props.updateBook(formData)
        }
        

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
            <p>{`This book is about ${faker.name.findName()}. They said, "
             ${faker.hacker.verb()} ${faker.hacker.phrase()}". It was utter nonsense. Though that did not stop them. `}</p>
            
            <select name="" id="read-selector" onChange={this.booleanFlip}>

                <option value="haveNotRead">Have Not Read</option>
                <option value="read">Read</option>
                <option value="currently_reading">Currently Reading</option>
                <option value="want_to_read">Want To Read</option>
            </select>  {`${book.read}`}
            </div>
           
        </div>
        )
     
    }
}

export default withRouter(BookShow);