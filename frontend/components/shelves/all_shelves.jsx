import React from 'react';
import { Link } from 'react-router-dom';
import SingleShelf from './single_shelf';
class AllShelves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelves: {},
            edit: false
        }
        // this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount(){
        this.props.requestAllShelves().then(shelves => {
            this.setState({ shelves: shelves })
        });
    }

    render(){
        const shelves = this.state.shelves.shelves ? Object.values(this.state.shelves.shelves) : [];

        console.log('shelves', shelves)
        if(!shelves){
            return (<h1>No Shelves</h1>)
        }
            return (
                <div className='all-shelves'>
                    <ul className='all-shelf-list'>
                    {shelves && shelves.map(shelf => (
                       
                           <SingleShelf
                            key={shelf.id}
                            shelf={shelf}
                            updateShelf={this.props.updateShelf}
                            requestShelf={this.props.requestShelf}
                           />
                       
                    ))} 
                    </ul>
                </div>
            )
        
    
    }
    
}

export default AllShelves;