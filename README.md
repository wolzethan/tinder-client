h# node-basic
Basic beginning structure for new node app

## Installation

#### NodeJS
In order to install this application you will first need to have NodeJs installed.  You can get Node from [here](http://nodejs.org)

- Once you have node installed and the repository cloned you need to run

```
  npm install
```

  this will install the necessary packages for the App into the 'node_modules' repository.


#### MongoDB

- since this is connected to a MongoDB in localhost you will need to make sure you have MongoDB installed.
- Once installed you need to make sure it is running by running the command

```
  mongod
```

#### Bower

Bower was used to install all of the necessary front end dependencies like angular
- Conveniently enough I included a Bower.json file for you...
- In order to install all of the dependencies you need make sure you install Bower

You can do this by running
```
npm install -g Bower
```
once you have bower installed make sure you are in the root directory of your app
you will then install the dependencies by Running

```
bower install
```

you should be good to go after this!
## Running the App

- If everything in the previous steps went well you should be able to run the app by running

```
  node index.js
```

If you see *BABY CEREBRO RUNNING ON 5000* Everything is working correctly
 - have fun playing with your new test app!
