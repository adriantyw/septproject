FROM node:10-alpine

WORKDIR /frontend/todo-app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 4200

CMD [ "npm", "start" ]