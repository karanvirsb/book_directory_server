# Book Finder Backend

A website to find a variety of books and their details. For the admin it allows them to create new books, update books, read the books and delete books. 

## Run Locally

Clone the project
Clone the front end [here](https://github.com/karanvirsb/book_directory_client)

```bash
  git clone https://github.com/karanvirsb/book_directory_server.git
```

Go to the project directory

```bash
  cd book_directory_server
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

The server will start on default http://localhost:8000 

Important  that you create an .env with BASE_UR=http://localhost:8000 for the requests to come to it

## Tech Stack
**Client:** React, CSS
**Server:** Express, Mongo DB, Node Js, IBM Cloud Object Storage

## Features
1. Uses the MVC concept
2. Has controllers for authentication, authorization, database connection, IBM Cloud strage connnection. 
3. Allows refreshing of tokens 
