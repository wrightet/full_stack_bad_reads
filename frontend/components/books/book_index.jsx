import React from 'react';
import BookIndexItem from './book_index_item';
import MakeShelfFormContainer from '../shelves/make_shelf_form';
import { Link } from 'react-router-dom';
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
        debugger
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
  
    render(){    
        const { books } = this.props;
        const shelves = this.state.shelves.shelves? Object.values(this.state.shelves.shelves) : [] ;
        let groupedBooks = [];
        for (let i = 0; i < books.length; i+=5) {
            groupedBooks.push(books.slice(i, i+5))
            
        }
       if (!books){return null;}
       return (
           <div className='book-index'>
               <div className='content'>
                   <div className='shelf-links'>
                       <label htmlFor=""> Bookshelves
                            <ul>
                                {
                                    shelves.map((shelf, index) => (
                                        <li key={shelf.id}>
                                            
                                    <a className='remove-shelf-button' onClick={() => this.shelfRemover(shelf.id)}>{index > 2 ?
                                    //  <div>
                                     
                                    //    {/* <button onClick={(e) => this.changeEdit(e)}>edit</button>    */}
                                    //  {/* </div> */}
                                     'x'
                                        
                                     : ''}</a>
                                            <Link to={`/shelves/${shelf.id}`}>{this.state.edit === false ? shelf.name : 
                                            <form onSubmit={(e) => this.handleSubmit(e, shelf)}>
                                                <input type="text" placeholder={shelf.name} value={shelf.name}/>
                                                <input type="submit" value='edit shelf name'/>
                                            </form>}</Link> 
                                        </li>
                                    ))
                                }
                                <li>
                                    <MakeShelfFormContainer 
                                    user={this.props.user} 
                                    createShelf={this.props.createShelf}
                                    requestAllShelves={this.props.requestAllShelves}
                                    />
                                </li>
                            </ul>
                        </label>
                    </div>
                <div className='book-container-right'>
                    {
                        groupedBooks.map(row => (
                            
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


    // render(){
    //     const {books} = this.props;
    //     if (!books){return null;}
    //     return(
    //     <div className="book-table-div">

    //         <table className="books-table">
    //             <thead className="book-index-column-list">
    //                 <tr className="table-header-row">
    //                     <th className="book-table-header-column-cover">Cover</th>
    //                     <th className="book-table-header-column-name">Title</th>
    //                     <th className="book-table-header-column-name">Author</th>
    //                     <th className="book-table-header-column-rating">Rating</th>
    //                     <th className="book-table-header-column-review">Review</th>
    //                     <th className="book-table-header-column-genre">Genre</th>


    //                 </tr>
    //             </thead> 
    //              <tbody className='books-list-body'>
    //                  { 
    //                         books.map(book => (
    //                             <BookIndexItem
    //                             book = {book}
    //                             key = {book.id}
    //                             requestAllReviews = {this.props.requestAllReviews}
    //                            />
    //                         ))
    //                     }
    //              </tbody>
    //         </table>
    //     </div>
    //     )
    // }