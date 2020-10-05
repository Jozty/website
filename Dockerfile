#
FROM node:12

WORKDIR /usr/src/app

RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

COPY package*.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .
RUN yarn build

EXPOSE 8080

CMD yarn start
