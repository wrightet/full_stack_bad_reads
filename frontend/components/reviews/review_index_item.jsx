import React from 'react';

class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
        
    }
    // componentDidMount(){
    //     this.props.requestAllReviews(this.props.match.params);
    // }
    render(){
        
        let review = this.props.review;
        if(!review) {return null}
        return (
            <div className='indv-review'>
                <ul>
                    <li>User: {review.user_id}</li>
                    <li>Rating: {review.rating}/ 5</li>
                    <li><span>{review.body}</span></li>
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;