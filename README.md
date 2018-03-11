# Planet Estate App
This is an application designed by Karen Zaunscherb. I do not own the rights to any of the photos used in the program, and it is not intented for commercial use. If you have a photo on here, and would like to have it referenced, please send me an email at karenelisse@gmail.com, and I'll happily give you credit, or I can take it down, if you wish. This is merely an application to hone my skills in the MEAN stack web applications. Read on for more information, or click the link below for a working version on Heroku:
https://hidden-bastion-24688.herokuapp.com/#!/home

If you want to try the login features, a current login is USERNAME: planet PASSWORD: secure

## The Task
The task was to create a fictional website for a company who wanted a Real Estate website, Full Stack, which exclusively sells planets. 

## About the thought process
This application was designed with full-stack in mind. I've worked with Nodejs and Express previously, but never Angular or MongoDB. I wanted to write the best application I could, with the amount of time I had, but I also wanted to prove to myself that I was capable of learning a new language and building something which could (with the addition of other add-ons), be a functional application. 
Here's how I came up with each page and added functionality: 

While there are many other features I'd love to add (see them below), I stuck to the main ones. What would a fictional Real Estate Planet selling company want? 
* Well, I figured they'd first want to have a landing page. On the landing page, they would probably want to have a welcome message, and something to help them navigate to...
* a page with the listings of the planets available. From there, ...
* They'd want to be able to see the details of the available planets, including more pictures and a mini-bio about the planet, and contact the agent tied to the planet. If, for some reason, the Agent is no longer there, the contact page will be the basic contact page with the company's basic info. 
* They'd also want to be able to see all of the current agents. Perhaps the user would want to select an agent to help them out in selling or buying the planet.
* Like any good company, they'd also want an "About Us" page, with information about them, and some contact information (other than their agent's personal contact information

That's it for the front end for what they'd really want on their page... but I also thought about the back-end. 
While I don't love the idea of having everything on the main landing page (and would prefer that's put in the background), for the purpose of this exercise, I also included a log in feature on the landing page. This enables a user to log into the account. 

* They'd want a secure login. While the process isn't perfect, I utilized Passport.js. It's an authentication middleware for Node.js. This allowed me to have pages which couldn't be accessed, unless it was through the login screen. 
* They'd want a landing page, or an Agent Home. This is where they could create another user / account, they can link to a page which shows all agents, and link to a page where they can see all of the listings. 
* I chose to have the create another user/account outside of the sign-up page because, in the real world, they wouldn't allow anyone to sign up, and it would be a hidden process. This page allows the user to create new logins, just as a worker may want to do,
* I wanted the user to be able to see all of the listings. This allows the person who is logged in (either agent, receptionist, or whomever is working) to have a simple view of the information. I didn't include information on the listing such as the bio or the images. The user is able to click two buttons: One to Modify, which takes them to a seperate Modify page, and one for Deletion. Currently, upon deletion, it deletes the planet, and then puts a bootstrap success message saying it's been successfully deleted, and then updates the listings.
* I wanted the user to be able to see all of the Agents. This allows the user to have a simple table view of the information. As with the listings, I didn't include images or Bios. There is also the modify and deletion buttons, with the success message for successfully deleted Agent accounts. 
* I wanted the user to be able to Modify the listings. Once the user clicks on "Modify", they are taken to a page where they can modify the listing's details. Upon completion of the form, the user clicks "Update" and a success bootstrap message shows up, and the user is able to modify it again. They can also click "cancel" to go back. 
* I wanted the user to be able to Modify the Agents. Once the user clicks on "Modify", they are taken to a page where they can modify the Agent's details. Upon completion of the form, the user can click "update" and a success message shows up, and the user is able to modify the Agent's details again, until they navigate away. 
* I wanted the user to be able to log out. 

In the background, I wanted a database, which stored both of the information of the Agents, as well as the Listings. I also wanted to be able to store photos, because most people choose a place, or at least are more interested in, places with pictures. I utilized FileStack's free service for this (but in the real-world, it could be upgraded). This allows the user to choose photos from their computer, dropbox, facebook, instagram, and even a google search. 
I used MongoDB, and used mLabs in order to set it up. 

All-in-all, I wanted a well-rounded website, with a decent database in the background. \

Other little things: 
* I chose Ethereum because I felt that Crypto-currency was able to be transferred across galaxies easier. Yes, I could have chosen BitCoin, but with the speed of BitCoin, I don't actually think it will make it to the point in time where we can sell planets! 
* I decided to stick with the main things for what the listing would have: Size (radius, in km), price, galaxy, solar system, and a bio. Ultimately, there were lots of things I could add: how much water, inhabited or not, how many moons, distance from a sun, average temperature ... the list goes on and on. That being said, those are all things I could add at a later time. 

## What I used
* __MongoDB__ I used MongoDB because it is schema-less and scalable. While the site is fairly juvenile, currently, lets face it: A Planet Real-Estate company will probably take off, one day! 
* __Express__ I used Express due to its ability to have middleware interface. I also wanted to use the put, get, post handling. 
* __Angular v 1.6__ I used Angular 1.6 for the front end. While there are many other newer versions of Angular, I felt more comfortable trying out Version 1 before I tried any other further versions. 
* __Nodejs__ I chose to use Nodejs not only because I'm familiar with it, but also because it's event driven. It has high scalability, and it is based on a single-thread, allowing many concurrent connections. 
* __Passport.js__ Passport is a way to allow the secure log-in, and status of their log in for the website. 
* __mongoose__ I used mongoose to connect to my MongoDB. It's simple and streamlined. 
* __FileStack__ I used FileStack to enable the user to upload photos and save the URL in the database, so the listings and agents could have photos attached
* __mLabs__ I chose to use mLab for the database hosting. While I could have hosted it locally, I chose to put it in the cloud. This allows it to have a backup, free, daily. While this doesn't matter currently, if this were to become scaleable, having it in the cloud is not always a bad thing. 
* __heroku__ I hosted it on Heroku for a couple of reasons, the first being that it was free. The second being that it works really well with Node.js. Third, because it is simple and straightforward to use from the command line. 

## Other Features I'd Like to Add
The thing about time, is you only have so much of it. While I would have love to have implemented the following, I just didn't have the time to do it. That being said, in my spare time, I'd love to come back and start adding some of these: 
* Search function. This is something I really wanted to add, but just ran out of time. I would love for people to be able to sift and sort through the listings, showing only ones in their price range, or in their specified galaxy
* Prettier Design. While the design isn't bad, I definitely would have loved to have made it look just that little bit better. Unfortunately, I wasn't able to put my slight photoshop skills to use. 
* Logo : all good companies need a good logo. 
* Ability to add or change photos. This one is a big one. While I allow the user to modify the text, modifying the images is something which I have not implemented yet. 
* Ability to modify only one section of text (HTTP PATCH versus PUT). Currently, with any of the changes, the user has to re-input all of the data. This is something I'd like to change and modify. 
* Ability to email the agents, directly through a form. Currently, the user is only able to email them on their own. 
* Ability to send and enquiry. This goes with the above - I'd love to have a "Contact Form"
* Modify for Mobile usage. Currently, it doesn't work very well on a mobile device. I'd like to be able to add that funcitonality. 
* Confirmation pop-up for deletions to confirm whether or not the user really wants to delete the agent or the listing. 
* List of all current users, with varying roles (ie admin, agent, other), with different levels of creation. Admin having access to everything, while the agent can only update their own listings, and other can update all listings (ie receptionist). 
* Pages with error codes ie 404, 401. 
* Information about sold or not - including prices and locations
* Rental planets
