# MovieGo
## About
A Website implemented using MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack, which allows users to sign-in/register and book movie tickets online.

## Snapshots of the website

1. Snapshot - 1

![Screenshot 1](/snapshots/screenshot-1.png)

2. Snapshot - 2

![Screenshot 1](/snapshots/screenshot-2.png)

## Things to Download before you proceed
I used the MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack for this project.

![MERN](https://camo.githubusercontent.com/6dbc5da76bbbbef861254082f537daf67d055f62/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3637382f312a6471766c61737a524c766f506d4152704f6c4c4e39412e706e67)

- [NodeJS](https://nodejs.org/en/)
- [MongoDB](https://www.mongodb.com/download-center)

The package.json files in the root, frontend and the backend folders contain all the required dependencies. First go ahead and make sure to download the latest stable version of [NodeJS](https://nodejs.org/en/) and also the latest version of [MongoDB](https://www.mongodb.com/download-center). Clone the repository and run the command `npm install` while in the root, frontend and backend folders to install all the dependencies. All the required steps to set up the project are mentioned below. Just follow through.

## Configuration Steps
1. Cloning the repository:

```
$ git clone https://github.com/ahmedgulabkhan/MovieGo.git
```

2. Installing the dependencies (using terminal):

```
$ cd MovieGo
$ npm install

$ cd backend
$ npm install

$ cd..

$ cd fronted
$ npm install
```
This installs all the required dependencies like React, React-router-dom, Concurrently, Express, Mongoose, Passport, etc.

3. dotenv file:

Create a .env file in the backend folder, and write the following code

`SECRET=Anythingyouwant`

and save it. The `SECRET` variable can literally have any value.

4. Configuring MongoDB:

Open your terminal, and go to the directory where you have MongoDB installed and from thereon cd to the directory which has the 'mongod.exe' file inside it. After you reach that directory through your terminal, type `mongod` and press enter, and the MongoDB server starts running locally on your machine on port 27017.

5. Checking if everything works fine:

Now open another terminal and cd to the MovieGo directory. Run the following code:

`$ npm start`

and you shall see that the website is loaded on your localhost port 3000.

## Currently Working On
- Using Bootstrap to make the website responsive.

- Different categories of seats with different prices like 'Gold - Rs. 150', 'Silver - Rs. 100' and 'Regular - Rs. 50'.

- ReactJS Pagination.

- Users can book multiple seats at the same time.
