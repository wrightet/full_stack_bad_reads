# README
![alt text](https://github.com/wrightet/full_stack_bad_reads/blob/master/app/assets/images/logo.png "Logo Title Text 1")

Welcome to Bad Reads, a website thats allows you to find the baddest books out there. It allows users to see a wide varity of books.

## Users can:

* Browse through an index of books.
* Click on a book and see its information.
* Experience a selector that allows you choose between read, currently reading, want to read, and haven't read. This selector currently accomplihes nothing.
* Hit the words home to go back to the index.
* Hover over the User Icon to and click log out to sign out.

## Link to the live site
* http://bad-reads.herokuapp.com/#/

## Technologies used
* Ruby v 2.5.1
* React v 16.12.0
* Rails v 5.2.3
* Redux v 4.0.5
* Jquery-rails
* Jbuilder v 2.5
* Node v 10.13.0

## Discussion of Technologies Used
* Bad Reads uses Ruby on Rails for its back end and React Redux for its front end. Jquery is used to get information from the backend to the frontend. 

## Features
 * One feature that was a bit of a challange was accomplishing a demo log in. I did this by creating a seed demo user in my data base and writing a function that allows that user to be signed in on click.
 
 * Another feature that I am proud of is the show page for each book. Though it is bare bones, I had to do some careful mapping to make sure I could get the correct book to be shown. The main issue I had was labeling the wild card incorrectly in map state to props of my container. After I fixed it, the page works like its straight out of 2003.

## Future direction of the site
* Allow users to create book selves.
* Review and rate books.
* See all reviews on each book.



