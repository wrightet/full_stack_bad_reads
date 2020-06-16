import React from 'react';
import SingleShelf from './single_shelf';
import MakeShelfForm from './make_shelf_form';
class AllShelves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelves: {},
            edit: false
        }
    }
    componentDidMount(){
        this.props.requestAllShelves().then(shelves => {
            this.setState({ shelves: shelves })
        });
    }

    render(){
        const shelves = this.state.shelves.shelves ? Object.values(this.state.shelves.shelves) : [];

        
        if(!shelves){
            return (<h1>No Shelves</h1>)
        }
            return (
                <div className='all-shelves'>
                    <div className='all-shelf-form'>
                        
                           <MakeShelfForm
                    user={{id: this.props.user}}
                    createShelf={this.props.createShelf}
                    />
                    </div>
                 
                    <ul className='all-shelf-list'>
                    {shelves && shelves.map(shelf => (
                       
                           <SingleShelf
                            key={shelf.id}
                            shelf={shelf}
                            updateShelf={this.props.updateShelf}
                            requestShelf={this.props.requestShelf}
                            deleteShelf={this.props.deleteShelf}
                           />
                       
                    ))} 
                    </ul>
                </div>
            )
    }
}

export default AllShelves;