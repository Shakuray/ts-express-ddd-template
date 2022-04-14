# Template with Typescript + Express


## Installation 🛫
To install and deploy this service you only have to follow the following steps:

```
npm install
npm run build
node dist/tsc/index.js
```

## Deployment in production 📦

### Using docker-compose 🐳
```
docker-compose build
docker-compose run -d
```

## Configuration 🔧
Environment variables are defined in .env file, located in the root folder of the project.

## Monitoring 📈
It is strongly recommended to constantly check this service is running. 

A **GET** at ```http://127.0.0.1:3000/``` must return a **200 status code**. If not, the service is not running.

## Test 🧪
Running `npm test` will execute all `src/test/*.test.ts` files with Jest.
