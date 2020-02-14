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
            <div>
                <ul>
                    <li>{review.userId}</li>
                    <li>{review.rating}</li>
                    <li><p>{review.body}</p></li>
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;