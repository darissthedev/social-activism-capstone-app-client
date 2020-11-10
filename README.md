# Social Activism Capstone (to do later)
Social Activism App with reliable and accurate information from your trusted social organizations, verified content updated daily. 



### 1. Working Prototype (to do later)
You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://your-app-server.herokuapp.com/



### 2. User Stories (done)
This app is for two types of users: a visitor and a logged-in user (verified)

###### Landing Page (Importance - High)
As a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

###### Login Page (Importance - High)
As a returning registered user
* I want to enter my password and username to use this app,
* So I can have access to my account.

###### Sign Up (Importance - High)
As a visitor
* I want to register to use this app
* So I can create a personal account.

###### Create Page (Importance - High)
As a logged-in user,
* I want to be able to create and edit, verfied content,
* So I can share important information on social  activities on the app.

###### Dashboard Page (Importance - High)
As a logged-in user,
* I want to be able to update and delete content posts on the app,
* So I can decide what activities are most relevant.

###### Explore Feed Page (Importance - Medium)
As a logged-in user,
* I want to be able to preview the content of the app,
* So I can decide what section I want to navigate to.



### 3. Functionality (done)
The app's functionality includes:
* Users/Visitors can click on 'Register' button to sign up/ sign in
* Users/Visitors can click on 'Learn More' to move to a detail page
* Users/Visitors can see a bullet list of features that the app provides
* Users can view verified content (users can be organization or view content)
* Users can browse a limited list of the most recent posts
* Users can create a post (to be verified) to share
* Users can delete a post they've created
* Users can edit/update a post they've created







### 4. Technology (done)
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (done)
Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/landing-page-wireframe.png)
Sign Up Page
![Sign Up Page](/github-images/wireframes/sign-up-page-wireframe.png)
Log In Page
![Log In Page](/github-images/wireframes/log-in-page-wireframe.png)
About Us Page
![About Us Page](/github-images/wireframes/about-page-wireframe.png)
Dashboard Page
![Dashboard Page](/github-images/wireframes/dashboard-page-wireframe.png)
Create Post Page
![Create Post Page](/github-images/wireframes/create-post-page-wireframe.png)
Exaplore Feed Page
![Explore Feed Page](/github-images/wireframes/explore-feed-page-wireframe.png)



### 6. Front-end Structure - React Components Map (to do later)
* (Example) __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __LogIn.js__ (stateful) -
            * __SignUp.js__ (stateful) -
        * __Navbar.js__ (stateless) -



### 7. Back-end Structure - Business Objects (to do later)
* (Example) Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)



### 8. API Documentation (to do later)
API Documentation details:
* (Example) get all users



### 9. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing-page-screenshot.png)
Register Page
![Register Page](/github-images/screenshots/register-page-screenshot.png)



### 10. Development Roadmap (to do later)
This is v1.0 of the app, but future enhancements are expected to include:
* (Example) add more functionality



### 11. How to run it (done)
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test