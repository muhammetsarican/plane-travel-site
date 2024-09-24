FROM node:alpine
RUN mkdir -p /usr/src/AppFellas/Server
WORKDIR /usr/src/AppFellas/Server
COPY ./package.json /usr/src/AppFellas/Server
RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
COPY . /usr/src/AppFellas/Server
CMD [ "yarn","server" ]