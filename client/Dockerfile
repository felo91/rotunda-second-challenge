FROM node:lts
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .

RUN npm run build
CMD npm start