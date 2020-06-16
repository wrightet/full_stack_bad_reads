import React from 'react';
import {Link} from 'react-router-dom';
import { formatDateTime } from '../../util/date_util';
import { IndivRating } from '../stars/stars';
class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            props: this.props.review,
            deleted: false,
            displayName: '',
            start: 0,
            end: 300,
            displayButton: 'more'
        };
        this.handleDelete = this.handleDelete.bind(this);
        this.handleName = this.handleName.bind(this);
        this.showMore = this.showMore.bind(this);
       
    }

    componentDidMount(){
        this.handleName(this.props.review.user_id)
    }

    handleDelete(bookId, review){
        this.props.deleteReview(bookId, review)
        window.location.reload() 
    }

    handleName(id) {
       let user = this.props.requestUser(id)
        .then( res => {
             this.setState({displayName: `${res.user.firstName} ${res.user.lastName}`})
        }
           
        )

    }

    showMore(length) {
        this.state.end === 300 ? this.setState({ end: length}) : this.setState({ end: 300 })
        this.state.displayButton === 'more' ? this.setState({ displayButton: 'less' }) : this.setState({ displayButton: 'more' })
    }

    render(){
        
        let review = this.props.review;

        if(!review) {return null}

        return (
            <div className='indv-review'>
                <div className='review-user-info'>
                   <div className='review-user'><h1>{this.state.displayName}</h1></div>
                    <div className='review-rating'>Rated it: 
                        <IndivRating
                            min={1}
                            max={5}
                            value={this.props.review.rating}
                        />  
                        <div className='review-date'>{formatDateTime(review.created_at).split('(')[0]}</div>
                    </div>
                  
                </div>
                <ul className='review-body'>
                    <li className='review-li'>
                        <span className='review-body-span'>
                            {review.body.split('').slice(this.state.start, this.state.end).join('')}
                            {review.body.split('').length > 300 ? 
                            <button  onClick={() => this.showMore(review.body.split('').length)}
                            className='more-less'> ...{this.state.displayButton}</button> : ''}
                        </span>
                    </li>
                    <li className='review-li'>
                        {this.props.currentUser === review.user_id ? 
                        <div className='review-edit-delete'>
                             <Link to={`/books/review/${review.id}/edit`} className='review-delete'>Edit</Link>
                            <button onClick={() => this.handleDelete(this.props.bookId, review)} 
                            className='review-delete'>Delete</button>
                        </div>
                        
                         :''}
                       
                    </li> 
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;