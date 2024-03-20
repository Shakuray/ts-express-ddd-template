FROM node:alpine as build

WORKDIR /app

COPY . /app

RUN npm install
RUN npm test
RUN npm run build

FROM node:alpine as image

WORKDIR /app

COPY package*.json ./
COPY --from=build /app/dist /app/dist

RUN npm install --only=prod

EXPOSE 3000
CMD node dist/tsc/index.js
