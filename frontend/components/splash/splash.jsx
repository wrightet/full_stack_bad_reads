import React from 'react'

class Splash extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
        <div className='splash'>
           
            <div className='left-content'> 
                <p>Has a friend or relative ever recommended a book to you, and you hated it?</p>
                <p>Did it make you feel like they did not really know you?</p>
                <br/>
                <p>Did you burn the book, give up on reading, and go live in the woods?</p>
                <br/>
                <p>Never again!</p>
                <br/>
                <p>Here at Bad Reads we allow users, just like you, to share their worst experiences with books.</p>
                <p>By writing a review you could save someone else the agony you went through.</p>
                <br/>
                <p>So save a book, and a life, write a review today!</p>
            </div>
            <div className='right-content'>
                <div><img src={window.images.byfireURL} alt=""/></div>
            </div>
            
        </div>
        )
        
    }
}

export default Splash;