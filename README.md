## NodeJS Workout of the Day #

### Requirement

To create a NodeJS application to serve an API that exposes the elasticsearch data in a particular way.

##### API Design ###

- The API must be accessible at `/api/v1/history`. For the purposes of this exercise there is no authentication.
- The API should accept a query parameter for starting date called `start`, which accepts an ISO 8601 "Date and time".
    The records returned should only have a timestamp equal to or greater than the datetime indicated by `start`. 
- The API should accept a query parameter for ending date called `end`, which accepts an ISO 8601 "Date and time".
    The records returned should only have a timestamp equal to or less than the datetime indicated by `end`.
- The API should return a list of documents

### Implementation

##### Live Demo
* [Online Demo](https://det-dev-test.herokuapp.com/api/v1/history?startDate=2019-02-11&endDate=2019-02-12)
* [Online Swagger API](https://det-dev-test.herokuapp.com/api-docs/#/history/Search)

- It might take 10 seconds to activate the heroku free dynos, please kindly wait 10 seconds.

##### Build & Test
Please make sure you have node.js 10.9 or later installed. 

- Run `git clone https://github.com/gavinwang-au/bus-reports-app.git` clone the project to your local.

- Run `npm install` to install dependencies.
  
- Run `npm run test` to execute the tests via Mocha.

- Run `docker-compose up –d` to run for a local test evn.

- Swagger UI can be accessed through `http://localhost:3030/api-docs`.

##### Teach Stack Choice & Key Decisions
- The [Typescript](https://www.typescriptlang.org/) is used within the node.js project.

- The [Express.js](https://expressjs.com/) is used as a http server framework for building the restful API.

- The [Tsoa](https://www.npmjs.com/package/tsoa) module is used to generate routes and the swagger spec (swagger.json) based on decorated controllers.
  1. Rely on TypeScript type annotations to generate API metadata.
  2. Support Dependency injection or IOC with [InversifyJS](https://github.com/inversify/InversifyJS)
- The [Swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express) module is used to serve auto-generated swagger docs from express, based on the generated swagger.json file.

- The [Heroku](https://www.heroku.com/) is used for cloud hosting





   




