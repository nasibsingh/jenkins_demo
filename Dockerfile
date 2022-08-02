FROM node:12
RUN mkdir -p /express-pg-api
WORKDIR /express-pg-api
COPY package*.json /express-pg-api/
COPY ./.env /express-pg-api/
RUN npm install
RUN npm run db:migrate
CMD npm start