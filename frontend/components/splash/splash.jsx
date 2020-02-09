import React from 'react'

class Splash extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='splash'>

                <div className='left-content'>
                    <p>Has a friend or relative ever recommended a book to you, and you hated it?</p>
                    <p>Did it make you feel like they did not really know you?</p>

                    <p>Did you burn the book, give up on reading, and go live in the woods?</p>

                    <p>Never again!</p>

                    <p>Here at Bad Reads we allow users, just like you, to share their worst experiences with books.</p>
                    <p>By writing a review you could save someone else the agony you went through.</p>

                    <p>So save a book, and a life, write a review today!</p>
                </div>
                <div className='right-content'>
                    <p>
                        Deciding what not to read next? We can help you!

                   </p>
                    <p>
                        Come browse our inventory of bad books.
                   </p>
                    <p>
                        Great Gatsby? Got it!
                        <img src={window.images.gatsbyURL} className="splash-book" />
                    </p>
                    <p>
                        Moby Dick? Got it!
                         <img src={window.images.mobyURL} className="splash-book" />
                    </p>
                    <p>
                        Anything Shakespeare? Of course!
                        <ul className="shakespeare-splash">
                            <li><img src={window.images.romeoURL} className="splash-book" /></li>
                            <li><img src={window.images.midsummerURL} className="splash-book" /></li>
                            <li><img src={window.images.tempestURL} className="splash-book" /></li>
                        </ul>
                    </p>
                    <p>
                        We have all of those
                   bad books and dozens more. Come and check them out today!
                    </p>

                </div>

            </div>
        )

    }
}

export default Splash;