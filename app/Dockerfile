FROM node:latest

WORKDIR /var/www/html

COPY . .

RUN yarn global add pm2

COPY ./package*.json ./

RUN rm -rf node_modules
RUN yarn install

COPY ./ ./

RUN yarn build


VOLUME /var/www/html


EXPOSE 3000

USER node

CMD [ "sh", "-c", "yarn pm2" ]