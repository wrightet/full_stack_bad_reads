import React from 'react'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='splash'>
                <h3 className="splash-greet">Welcome to Bad Reads!</h3>
                <ul>
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
        )

    }
}

export default Splash;