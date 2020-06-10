import React from 'react';
import { Link } from 'react-router-dom';

class SingleShelf extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            shelf: null
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.requestShelf(this.props.shelf.id).then(shelf => this.setState({shelf:shelf}))
    }

    handleEdit() {
        return this.state.edit === false ? this.setState({ edit: true }) : this.setState({ edit: false })
    }

    update(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e, shelf) {
        e.preventDefault();
        this.props.updateShelf(shelf)
        // window.location.reload()
    }

    render(){
        const shelf =  this.props.shelf;
        return (
            <li className='all-shelf-items' key={shelf.id}>
                <Link to={`/shelves/${shelf.id}`}>
                    {shelf.name}
                </Link>
                {this.state.edit === false ? <button onClick={() => this.handleEdit()}>rename</button> : ''}
                {this.state.edit === true ?
                    <div>
                        <form value={this.state.name} onSubmit={(e) => this.handleSubmit(e, shelf)}>
                            <label htmlFor="">
                                <input type="text" value={this.state.name} onChange={this.update('name')} />
                            </label>
                            <input type="submit" value='add' />
                        </form>
                    </div>
                    : ''}
            </li>
        )
    }
    
}

export default SingleShelf