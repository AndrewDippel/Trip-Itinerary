# Take Me Away....

In this project, we work with a group to build a full-stack trip planning app 

## Table of Conents

- [Project Description](#project-description)
- [Links](#links)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Technologies Used](#technologies)
- [Credits](#credits)
- [License](#license)

## Project Requirements

The project must fulfil the following requirements:

Use Node.js and Express.js to create a RESTful API.

Use Handlebars.js as the templating engine.

Use MySQL and the Sequelize ORM for the database.

Have both GET and POST routes for retrieving and adding new data.

Be deployed using Heroku (with data).

Use at least one new library, package, or technology that we haven’t discussed.

Have a polished UI.

Be responsive.

Be interactive (i.e., accept and respond to user input).

Have a folder structure that meets the MVC paradigm.

Include authentication (express-session and cookies).

Protect API keys and sensitive information with environment variables.

Have a clean repository that meets quality coding standards (file structure, naming conventions, follows best practices for class/id naming conventions, indentation, quality comments, etc.).

Have a quality README (with unique name, description, technologies used, screenshot, and link to deployed application).

## Links

Github: https://github.com/AndrewDippel/Trip-Itinerary
Heroku: 

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

## Specifications 

* The database models have the following fields and associations:

  * `User`

    * `id`: primary key

    * `name`

    * `email`

    * `password`

  * `Project`

    * `id`: primary key

    * `name`

    * `description`

    * `date_created`

    * `needed_funding`

    * `user_id`: foreign key that references `User.id`

  * Users have many projects, and projects belong to a user.

    * If a user is deleted, all associated projects are also deleted.

---

## 💡 Hints

* What tools can you use to test the existing API routes if you don't yet have a front end?

* Where would you place the client-side JavaScript for capturing form data?

* How can middleware help protect routes from non logged-in users?

* How can Handlebars.js helpers (both built-in and custom) be used to render the desired results?

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* Add an `/edit/:id` route for logged in users to update their projects' details. Then deploy the app to Heroku!

---
© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
