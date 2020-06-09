import React from 'react'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='splash'>
     
               
                <div className="splash-content">
                    <div className='splash-intro'>
                        <h2 className='intro-label'> Deciding what not to read next? </h2>
                            <p className='intro-des'>
                                You are in the right place! Browse titles that users like you have rated. See a book you don't like? 
                                Give it a review, so others won't have to read it. 
                            </p>
                       
                        
                    </div>
                    <ul className='books-splash-master'>
                        <li className='book-list-label'>What will you discover?</li>
                        <li>
                            <ul className="books-list-splash">
                                <li><img src={window.images.romeoURL} className="splash-book"  /></li>
                                <li><img src={window.images.midsummerURL} className="splash-book" /></li>
                                <li><img src={window.images.tempestURL} className="splash-book" /></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="books-list-splash">
                                <li><img src={window.images.gatsbyURL} className='splash-book'/></li>
                                <li><img src={window.images.mobyURL} className='splash-book'/></li>
                                <li><img src={window.images.catcherURL} className='splash-book'/></li>
                            </ul>
                        </li>
                        <li>
                            <ul className="books-list-splash">
                                <li><img src={window.images.twilightURL} className='splash-book'/></li>
                                <li><img src={window.images.fiftyURL} className='splash-book'/></li>
                                <li><img src={window.images.eragonURL} className='splash-book'/></li>
                            </ul>
                        </li>
                    </ul>
                    
                </div>
            </div>
        )

    }
}

export default Splash;