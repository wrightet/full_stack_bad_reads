# README

![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/logo.png "Logo Title Text 1")
## Link to the live site
* http://bad-reads.herokuapp.com/#/
Welcome to Bad Reads, a website thats allows you to find the baddest books out there. Bad reads can help you find some of the worst books out there. Then once you've found one you hate, leave a review!

## Technologies used
* Ruby
* Javascript
* React
* Ruby on Rails
* Redux
* Node

## Discussion of Technologies Used
* Bad Reads uses Ruby on Rails for its back end and React Redux for its front end. Jquery is used to get information from the backend to the frontend. JBuilder takes the place of Ruby on Rails's usual view files, and gets the information to React which actually handles the view. The Faker Gem is used to populate most of the website's information. The first nine books were put in manually but faker handled the other hundred to show scalability.

## Features
* Browse through an index of books.
![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/index_photo.png "Logo Title Text 1")
`    books.map(book => (
                                <BookIndexItem
                                book = {book}
                                key = {book.id}
                                requestAllReviews = {this.props.requestAllReviews}
                               />
                            ))`
* Click on a book and see its information. 
![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/book_info.png "Logo Title Text 1")
`
 <td><Link to={`/books/${book.id}`}><img src={this.keyFinder(book.url)} alt="" className="book-photo" /></Link></td>
`
* Rate books and leave a review. The review can also be edited or deleted if left by the current user.
![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/create_form.png "Logo Title Text 1")
![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/edit_form.png "Logo Title Text 1")
````
 {this.props.currentUser === review.user_id ? 
                        <div className='review-edit-delete'>
                             <Link to={`/books/review/${review.id}/edit`} className='review-delete'>Edit</Link>
                            <button onClick={() => this.handleDelete(this.props.bookId, review)} 
                            className='review-delete'>Delete</button>
                        </div>
                        
                         :''}
````
* Hover over the User Icon to and click log out to sign out.
![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/logout.png "Logo Title Text 1")

 * One feature that was a bit of a challange was accomplishing a demo log in. I did this by creating a seed demo user in my data base and writing a function that allows that user to be signed in on click.
 ` this.props.login({ first_name:'Demo', last_name:'Demo', email: 'demo', password: '123456' })
        .then(() => this.props.history.push('/') );`
 
 * Another feature that I am proud of is the review form. It is a partial and took a lot of work because the information it needs is different on create and edit. The end result was dryier code that works as intended.
 
 


