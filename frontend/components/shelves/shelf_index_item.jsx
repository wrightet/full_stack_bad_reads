import React from 'react';
import { Link } from 'react-router-dom'
class ShelfIndexItem extends React.Component {
    constructor(props){
        super(props);

    }

    render(){
        <Link to=''>{this.props.name}</Link>
    }
}