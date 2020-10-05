FROM node:12

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

#RUN npm i -g yarn

RUN yarn install

COPY . .
RUN yarn build

EXPOSE 8080

CMD yarn start
