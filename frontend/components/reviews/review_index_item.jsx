import React from 'react';

class ReviewIndexItem extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        let review = this.props.review;

        return (
            <div>
                <ul>
                    <li>{review.user_id}</li>
                    <li>{review.rating}</li>
                    <li><p>{review.body}</p></li>
                </ul>
            </div>
        )
    }
    
}

export default ReviewIndexItem;