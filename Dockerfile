FROM node:18

WORKDIR /usr/src/app

COPY backend/package*.json ./

RUN npm install

COPY backend/ .

COPY frontend/src/public/ ./public/

EXPOSE 3000

CMD [ "node", "app.js" ]