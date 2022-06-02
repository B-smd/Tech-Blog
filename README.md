# tech_blog

  ![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Description

The Tech Blog is a CMS style blog site similar to a Wordpress site, where delelopers can publish their blog post and comment on other developer's posts as well. It's utilising the MVC structure, routes, SQL and using Handlebars as the templating language, Sequelize as the ORM, and the express-session npm package for authentication. New user can sign up and for the existing user just login, then can leave a comments, edited or updated their post. 

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](questions)

## Installation

- Install `.gitignore` and include `node_modules`, `.DS_Store` and `.env`, then Install `npm` to acquire inquirer package. Also install `npm install express` and `npm install  express-handlebars` package to implement Handlebars.js for Views. 

- Install `npm install --save mysql2` to use the [MySql2] and `npm i sequelize` to use the [sequelize] to connect your Express.js API to a MySQL database and also `npm i dotenv` the [dotenv] package to use environment variables to store sensitive data.

- Install `npm install bcrypt` to hash password, and `npm install express-session` and `npm install connect-session-sequelize` packages to add authentication.

## Usage

GIVEN a CMS-style blog site, as a user:
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the site for more than a set time
THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


## Demo

[Heroku](https://techblog-bambang.herokuapp.com/)

## Credits

- [Simon-Xu-Lan](https://github.com/Simon-Xu-Lan)

- [Sam-Ngu](https://github.com/sam-ngu)

- [Chee-Tai](https://github.com/cupacheeno)

## License
    This application is covered by the MIT license.

---
## Badges
![Badge](https://img.shields.io/badge/License-MIT-blue.svg)

## Features

n/a

## Contributing

Pull request are welcome, you can make a constribution at the bottom of any docs page to make small changes such as a typo, sentence fix or a broken link. For major changes, please open an issue first to discuss what you would like to change.

## Tests

Install `npm i -D nodemon` and change on package json "script": {"watch": "nodemon server.js"}, then run `npm run watch`, so test it everytime you make the code. Also you can check on mysql workbench for your work.

## Questions

If you have any question, Email me at: djaja@iinet.net.au 

Find me on GitHub: [B-smd](https://github.com/B-smd)   
