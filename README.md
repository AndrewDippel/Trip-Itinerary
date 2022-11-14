# Take Me Away....

* In this project, we worked with a group to build a full-stack trip planning and itinerary app. 

## Table of Conents

- [Project Requirements](#project-requirements)
- [Links](#links)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies)
- [Screen Shots](#screen-shots)
- [Credits](#credits)
- [License](#license)

## Project Requirements

* The project must fulfil the following requirements:

* Use Node.js and Express.js to create a RESTful API.

* Use Handlebars.js as the templating engine.

* Use MySQL and the Sequelize ORM for the database.

* Have both GET and POST routes for retrieving and adding new data.

* Be deployed using Heroku (with data).

* Use at least one new library, package, or technology that we haven’t discussed.

* Have a polished UI.

* Be responsive.

* Be interactive (i.e., accept and respond to user input).

* Have a folder structure that meets the MVC paradigm.

* Include authentication (express-session and cookies).

* Protect API keys and sensitive information with environment variables.

* Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

* Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Links

Github: https://github.com/AndrewDippel/Trip-Itinerary
Heroku: https://dashboard.heroku.com/apps/arcane-beach-31622
Project URL: https://arcane-beach-31622.herokuapp.com/

## User Stories

* As a registered user, I want to plan my holiday itinerary.

* As a registered user, I want to be able to store locations in multiple destinations including countries, the date, the city and write notes on the sites to see.

* As a registered user, I want to be able reuse my list when logging back into the site. 

### Acceptance Criteria

* It's done when the `/` homepage route renders a list of the itinerary list from the database.

* It's done when the `/login` route renders a form to log in and a form to create a new account.

* It's done when an existing user can enter their credentials on the login page to create a session on the server.

* It's done when a new user can create an account on the login page and then be immediately logged in with a session.

* It's done when the `/distination` route renders the logged-in user's projects and a form to create a new project.

* It's done when only a logged in user can visit the `/destination` route.

* It's done when a user on the dashboard page can use the form to create a new project in the database.

* It's done when a user on the profile page can select a "Delete" button to remove their project from the database.

* It's done when a logged-in user can select a "Logout" button to remove their session.

* It's done when the session for a logged-in user expires after a set time.

* It's done when the API routes to create and delete posts are protected from non logged-in users.

* It's done when the code is organized using MVC architecture.

* It's done when the views are rendered with Handlebars.js templates.

## Technologies Used 

* We used the following technoligies;

  * Github

  * Heroku

  * Bulma Library

  * Insomnia

  * Node.js

  * Express.js

  * Handlebars.js


## Screen Shots
![Screenshot 2022-11-13 154257](https://user-images.githubusercontent.com/109957674/201506259-e3395297-a6bd-401f-bc13-c5ab52cdb00e.png)

![Screenshot 2022-11-13 154326](https://user-images.githubusercontent.com/109957674/201506328-7e59cfa9-bf51-40f9-bf78-a3187cd6f9a2.png)

## Credits

* Andrew Dippel

* Zachary Smart

* Nicholas Strong

* Trainer and Training Assistant

## License
This project was developed by Andrew Dippel, Zachary Smart and Nicholas Strong whilst undertaking Bootcamp Coding course through Sydney University and Trilogy Enducation Services

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
