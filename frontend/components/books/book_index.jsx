import React from 'react';
import BookIndexItem from './book_index_item';
import MakeShelfFormContainer from '../shelves/make_shelf_form';
import { Link } from 'react-router-dom';
import Loader from '../loading_wheel.jsx';

class BookIndex extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            shelves: {},
            edit: false
        }
        this.shelfRemover = this.shelfRemover.bind(this);
        this.changeEdit = this.changeEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    componentDidMount(){
        this.props.requestAllBooks();
        this.props.requestAllShelves().then(shelves => {
            this.setState({shelves: shelves})
        });
    }

    shelfRemover(shelfId){
        this.props.deleteShelf(shelfId);
        window.location.reload();
    }

    changeEdit(e){
        
        e.preventDefault();
        if (this.state.edit === false){
            this.state.edit = true;
        }else{
            this.state.edit = false;
        }
    }

    handleSubmit(e, shelf){
        e.preventDefault();
        this.props.updateShelf(shelf);
        // window.location.reload();

    }

    triggerEdit(){
        this.state.edit === false ? this.setState({edit: true}) : this.setState({edit: false})
    }
  
    render(){    
        const { books } = this.props;
        const shelves = this.state.shelves.shelves? Object.values(this.state.shelves.shelves) : [] ;
        let groupedBooks = [];
        for (let i = 0; i < books.length; i+=5) {
            groupedBooks.push(books.slice(i, i+5))
            
        }
        if (!books) { return <Loader />;}
       return (
           <div className='book-index'>
               {/* <Loader/> */}
               <div className='content'>
                   <div className='shelf-links'>
                       <label className='book-shelf-label' htmlFor=""> Bookshelves
                            <ul className='book-shelves-ul'>
                                {
                                    shelves.map((shelf, index) => (
                                        <li className='shelf' key={shelf.id}>
                                            
                                    <a className='remove-shelf-button' onClick={() => this.shelfRemover(shelf.id)}>{index > 2 ?
                                    //  <div>
                                     
                                    //    {/* <button onClick={(e) => this.changeEdit(e)}>edit</button>    */}
                                    //  {/* </div> */}
                                     'x'
                                        
                                     : ''}</a>
                                            <Link className='single-shelf' to={`/shelves/${shelf.id}`}> {shelf.name}
                                           </Link> 
                                        </li>
                                    ))
                                }
                                <li className='single-shelf'>
                                    {this.state.edit === false ? <button className='add-shelf-button' onClick={() => this.triggerEdit()}>add</button>
                                    :
                                       <MakeShelfFormContainer
                                           user={this.props.user}
                                           createShelf={this.props.createShelf}
                                           requestAllShelves={this.props.requestAllShelves}
                                       />
                                    }
                                  
                                </li>
                            </ul>
                        </label>
                    </div>
                <div className='book-container-right'>
                  
                    {
                           !groupedBooks ? <Loader /> :groupedBooks.map(row => (
                            
                            <div className='book-index-row' key={groupedBooks.indexOf(row)}>
                            
                                {
                                row.map(book => (
                                    <BookIndexItem
                                    book={book}
                                    key={book.id}
                                    shelves={shelves}
                                    requestAllReviews={this.props.requestAllReviews}
                                    createLibrary={this.props.createLibrary}
                                    />
                                ))}
                            </div>
                        ))
                    }
                </div>
               </div>
               
                
           </div>
       )
    }
}

export default BookIndex;