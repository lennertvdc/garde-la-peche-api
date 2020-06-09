# Garde la pêche api

## Overview
This is a simple JSON based REST API, built with Node js, Express and the Sequelize ORM. It's purpose is to store the scraped data from the [garde la pêche facebook group](https://www.facebook.com/groups/gardelapecheglp/) and also all the webhooks created from the discord bots.

## Setup

### Clone the repo and install dependencies via NPM:
```
npm install
```
This will install all required packages.

### Create mysql user
Use code below to create mysql user. Change `user`, `password` and `database_name`.

Note: If database name exist out of more then one word, use `_` instead of `-`. Otherwise you will get a error. Also you don't need to create the database sequelize will do it for you.
```SQL
CREATE USER 'user'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'user'@'localhost';
```

### Edit .env file
Change name of `.env.example` to `.env`. Then edit the file with your data. Below you find the explanation of each item inside the `.env` file.

#### NODE_ENV
This is the environment where the api will run in. You can choose between "development" and "production".

#### PORT
This line determines on which port your api will run. 

#### DB_HOSTNAME
Change this if your mysql database doesn't run on "localhost".

#### DB_NAME
Name of database it will use, that you defined when you created the `mysql user`.

#### DB_USERNAME
Name of user to connect to mysql, that you defined when you created the `mysql user`.

#### DB_PASSWORD
User's password to connect to mysql, that you defined when you created the `mysql user`.

### Setup database
```
npm run setup-db
```
This will `create the database`. Then it will `migrate all the tables`. Finally it will `seed the oldest post data` into the posts table.

## Running the server

### Production
```
npm run start
```

### Development
```
npm run dev
```

## Routes / Endpoints
The following routes are set up, and will return JSON data:

**Posts**
* **GET** all posts: `/api/posts`
* **GET** latest post: `/api/posts/latest`
* **POST** new post: `/api/posts`

**Webhooks**
* **GET** all webhooks: `/api/webhooks`
* **POST** new webhook: `/api/webhooks`

## Controllers

The CRUD methods for each model are moved into separate controller files, stored in `./controllers`.

The controllers use Sequelize's promise-based methods to read and write to the database, and catch any errors.


## Sequelize Models
The model files are generated for us by the Sequelize-cli. They are files which describe a database table in the form of a javascript object.

More information here:
[Creating a Model](https://sequelize.org/master/manual/migrations.html#creating-the-first-model--and-migration-)

The models folder has an index.js file, which is where Sequelize connects to the database. The index.js file also contains the logic for creating the associations between the models.


## Migrations
The migration files are generated using the sequelize-cli, to enable us to edit the database, add tables, columns etc.. whenever we create a new model or edit an existing one. This is a form of version control for our database.

When we generate a new model file, Sequelize-cli will automatically create the migration file for us. We can also manually generate a migration file, for example the ones to add columns for our foreign keys.

More information here:
[Migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)


## Seeders
The seed files in `./seeders` provide a series of javascript objects, with pre-defined information to insert into each database table as sample data rows.

Running the seeders via the command line will insert the data into the tables. This should be done after the database has been properly migrated.

More information here:
[Creating and running seeders](https://sequelize.org/master/manual/migrations.html#creating-the-first-seed)
