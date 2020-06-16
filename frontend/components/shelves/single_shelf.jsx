import React from 'react';
import { Link } from 'react-router-dom';

class SingleShelf extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            // shelf: this.props.shelf,
            name: '',
            user_id: this.props.user_id,
            id: this.props.shelf.id
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.shelfRemover = this.shelfRemover.bind(this);
        console.log('single', props)
    }

    componentDidMount(){
        this.props.requestShelf(this.props.shelf.id).then(shelf => this.setState({shelf:shelf}))
    }

    handleEdit() {
        return this.state.edit === false ? this.setState({ edit: true }) : this.setState({ edit: false })
    }

    update(field) {
        console.log(field)
        return e => this.setState({[field]: e.target.value })
    }

    handleSubmit(e, shelf) {
        e.preventDefault();
        this.props.updateShelf(shelf)
        window.location.reload()
    }

    shelfRemover(shelfId) {
        this.props.deleteShelf(shelfId);
        window.location.reload();
    }

    render(){
        const shelf =  this.props.shelf;
        const arr = ['currently reading', 'read', 'want to read'];
        return (
            <li className='all-shelf-items' key={shelf.id}>
                {!arr.includes(shelf.name) ? <a className='remove-shelf-button' onClick={() => this.shelfRemover(shelf.id)}>x</a> : ''}
                <Link to={`/shelves/${shelf.id}`}>
                    {shelf.name}
                </Link>
                {this.state.edit === false && !arr.includes(shelf.name) ? <button className='rename-shelf' onClick={() => this.handleEdit()}>rename</button> : ''}
                {this.state.edit === true ?
                    <div>
                        <form value={this.state.name} onSubmit={(e) => this.handleSubmit(e, this.state)}>
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