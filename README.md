# node_example
## Introduction
This application is based on a 2017 FreeCodeCamp article by Scott Domes ([article](https://www.freecodecamp.org/news/building-a-simple-node-js-api-in-under-30-minutes-a07ea9e390d2/)). There are a few updates for 2021 and I used a
`.env` file for organizing credentials.

## Installation/Setup

### Cloning and Dependencies
- Clone the repository from GitHub (docs [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository))
- run `npm install` to install dependencies listed in `package.json`
- run `cp .env.example .env` to create `.env` file. You'll need to supply values for your own mongodb instance (they do offer a [free hosted tier](https://www.mongodb.com/cloud/atlas)).

### App setup
- run `npm run dev` to run in a development environment with nodemon. This will allow you to play with the app, make changes and have the app restart to reflect them in real-time.


## Use

This example has one endpoint - `notes`.

To POST a new note, the app uses url-encoded parameters `title` and `body`.

For GET, DELETE requests, the note's id is simply passed to the URI.

For PUT requests, the id is passed to the uri and url-encoded body parameters `title` and `body` are also provided.

## Resources
- When running on Ubuntu, nodemon error seems commmon because of limits on how many files can be watched. This solution worked for me: https://stackoverflow.com/questions/34662574/node-js-getting-error-nodemon-internal-watch-failed-watch-enospc
