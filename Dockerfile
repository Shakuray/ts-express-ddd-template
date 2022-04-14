FROM node:alpine

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY . .

RUN npm test
RUN npm run build

EXPOSE 3000
CMD node dist/tsc/index.js
