
## React-resizable-grid

### Contents
1. [Overview](#overview)
2. [Features](#FEATURES)
3. [Setup](#setup)
4. [Screens](#screens)


### Overview
---
+ This Web App is made for the purpose of Precily AI web development assessment. Link deployed [here](https://resizable-grids.netlify.app/).
+ Tech stack used : [React](https://reactjs.org/), [NodeJS](https://nodejs.org/en/), [MongoDB](https://www.mongodb.com/), 
+ Server is deployed on [Heroku](https://www.heroku.com) and Database on [MongoDb Atlas](https://www.mongodb.com/cloud/atlas)
## FEATURES
+ Resizable components.
+ Number of times component updated visible.
+ Modular approach for coding. 
+ Code is easy to understand without any complexity.
    
### Setup
---
Before proceeding please download and install [NodeJS](https://nodejs.org/en/download/) and [MongoDB](https://www.mongodb.com/download-center/community) because it is required.

1. Download/Clone the Repository
2. Navigate into the Repository folder on your disk using Terminal
3. Make sure that you have the Node and MongoDB installed
4. Run the following command to run the setup,`npm install`  
5. Go to server(NodeJs) folder
6. Create .env file for environment setup

	`MONGODB_URL = mongodb://localhost:27017/gridDB`<br>     
    
Now everything required should be installed, go ahead and run the following command whenever you want to run the app,
`node server.js`
##### The Server would now be Up and Running on localhost:9000

Now run npm install on root folder(react app too) , go ahead and run the following command whenever you want to run the app,
`npm start`
##### The React app would now be Up and Running on localhost:3000
    
    
### Screens
---
#### Landing Page,
![Landing page](https://i.ibb.co/fvH673d/grid-react.jpg)

####Resize Grid

![Resize Grid](https://i.ibb.co/S5j9wDB/grid-react2.jpg)

#### Edit Grid
![Edit Grid](https://i.ibb.co/nL356Qn/grid-react3.jpg)
