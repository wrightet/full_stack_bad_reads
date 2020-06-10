import React from 'react';
import { Link } from 'react-router-dom';
class AllShelves extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelves: {},
            edit: false
        }
        this.handleEdit = this.handleEdit.bind(this);
    }
    componentDidMount(){
        this.props.requestAllShelves().then(shelves => {
            this.setState({ shelves: shelves })
        });
    }

    handleEdit(){
        return this.state.edit === false ? this.setState({edit:true}) : this.setState({edit:false})
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createShelf(this.state)
        window.location.reload()
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
                       
                            <li className='all-shelf-items' key={shelf.id}>
                                <Link to={`/shelves/${shelf.id}`}>
                                    {shelf.name}
                                </Link>
                            {this.state.edit === false ? <button onClick={() => this.handleEdit()}>rename</button> : ''}
                            {this.state.edit === true ? 
                                <div>
                                    <form value={this.state.name} onSubmit={this.handleSubmit}>
                                        <label htmlFor="">
                                            <input type="text" value={this.state.name} onChange={this.update('name')} />
                                        </label>
                                        <input type="submit" value='add' />
                                    </form>
                                </div>
                            :''}
                            </li>
                       
                    ))} 
                    </ul>
                </div>
            )
        
    
    }
    
}

export default AllShelves;