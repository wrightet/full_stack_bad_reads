import React from 'react';
import { Link } from 'react-router-dom';
import { Rating, IndivRating } from '../stars/stars'
class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.user_id = this.props.userId;
        this.book_id = this.props.bookId;
        this.state = this.props.review;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.keyFinder = this.keyFinder.bind(this);
    }

    componentDidMount(){
        this.props.requestAllReviews(this.book_id) 
    }

    update(field){
        return e => this.setState({ [field]: e.target.value})
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

    handleSubmit(e){
        e.preventDefault();
        if (this.props.formType === 'Edit Review'){
            this.props.action(this.state)
            .then(
                () => this.props.requestBook(this.props.bookId)
            )
            
            this.setState({
                rating: 3,
                book_id: this.props.bookId,
                user_id: this.user_id,
                body: '',
                checked: 'checked'
            })
            this.props.history.push(`/books/${this.props.bookId}`)
        }else{
           
            this.props.action(this.props.match.params.id, this.state).then(
                () => this.props.requestAllReviews(this.props.match.params.id)
            )
            // .then(window.location.reload())
        //   let el = document.getElementById(`rating-${this.state.rating}`)
        //   console.log(el)
            this.setState({
                rating: 3,
                book_id: this.props.match.params.id,
                user_id: this.user_id,
                body: '',
                user: this.user,
                // checked:'checked'
            })
            
            this.props.history.push(`/books/${this.props.match.params.id}`)
            
        }
            
    }
    
    render(){
     if (this.props.formType === 'Edit Review'){
         this.state.book_id = this.book_id;
         this.state.title = this.state.book.title;
     }
        else { 
            this.state.book_id = this.props.match.params.id;
            this.state.title = this.props.books[this.props.match.params.id].title;
        } ;
     
      
        let id = this.state.book_id || this.props.bookId;
        return(
            
            <div className='review-form-div'>
                <div className='review-path-div'>
                    {this.props.formType === 'Add Review' ?
                        <div>
                            <h1 className='review-form-path'>{this.state.title}</h1>
                            <h1 className='review-formpath-words'> > Review </h1>
                        </div> :
                        <div>
                            <h1 className='review-form-path'>{this.state.title} </h1>
                            <h1 className='review-formpath-words'> > Review > Edit </h1>
                        </div> }
                </div>
                { this.props.formType === 'Add Review' ? 
                <div className="review-form-image">
                    <img src={this.keyFinder(this.props.books[this.props.match.params.id].url)} className='review-form-photo' /> 
                    <h1 className='review-form-title'>{this.state.title}
                    <span className='review-form-author'> <span className='by-span'>by</span> {this.props.books[this.props.match.params.id].author}</span>
                  
                    </h1>
                        
                </div> 
                :
                <div className="review-form-image">
                    <img src={this.keyFinder(this.props.review.book.url)} className='review-form-photo' />  
                    <h1 className='review-form-title'>{this.state.title}
                    <span className='review-form-author'> <span className='by-span'>by</span> {this.props.review.book.author}</span>
                      </h1>
                </div> 
                }
               
                <form onSubmit={this.handleSubmit} className='review-form'>
                    <div className='rating-div'>

                        <label className='rating-label'> My rating:
                         <form value={this.state.rating} onChange={this.update('rating')}>
                            {/* <input type="radio" value="1" name='rating'  id='rating-1'/> 1
                            <input type="radio" value="2" name='rating'  id='rating-2'/> 2
                            <input type="radio" value="3" name='rating'  id='rating-3'/> 3
                            <input type="radio" value="4" name='rating'  id='rating-4'/> 4
                            <input type="radio" value="5" name='rating'  id='rating-5'/> 5 */} 

                            <Rating 
                            min={1}
                            max={5}
                            onChange={this.update('rating')}
                            value={this.state.rating}
                            />
                        </form>
                
                    </label>
                    </div>
             
                    <label className='write-review-label'> What do you think?
                        <textarea value={this.state.body} placeholder='Write a review' 
                        onChange={this.update('body')}
                        className='review-text-area'/>
                    </label>
                    <div className='review-submit-cancel'>
                        <input type="submit" value={this.props.formType} className='review-submit'/>
                        <Link to={`/books/${id}`} className='cancel'>Cancel</Link>
                    </div>
                    
                </form>
                
            </div>
        )
    }
    
}

export default ReviewForm;