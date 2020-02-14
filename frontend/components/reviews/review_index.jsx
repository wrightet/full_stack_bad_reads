import React from 'react';
import ReviewConatiner from './reviews_container';
import reviews_container from './reviews_container';

class ReviewIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {reviews} = this.props;
        return(
                <div>
            {
                reviews.map(review => (
                    <ReviewIndexItem
                    review = {review}
                    key = {review.id}
                    />
                ))
            
            
            }
        </div>
        )
    
    }
}

export default ReviewIndex;