## Description

The goal of this project is to provide the means for developers, in a given organization, to quickly determine the order in which they should work on their assigned GitHub issues.

For this task we created two services, a frontend made in React.js and a backend made in Node.js.

With the following commands we can instantiate the services locally or alternatively we can have a much more portable solution by running them in a container with docker-compose

Both of them have an .env file to set global variables

## Installation

```bash
$ npm install
```

## Running 

```bash
# development
$ npm start

# watch mode for server
$ npm run start:dev

```

## Docker

There is a `docker-compose.yml` file for starting frontend and backend with Docker.
First Build the images

`$ docker-compose build`

Then run the images

`$ docker-compose up`

After running, you can stop the Docker container with

`$ docker-compose down`

Base endpoint

`http://localhost:80`


## Warning

To get the issues from Github this project is not using any GitHub credential so if you do to many request GitHub will return and 429 error


## License

Nest is [MIT licensed](LICENSE).
