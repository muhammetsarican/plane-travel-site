FROM node:alpine
RUN mkdir -p /usr/src/AppFellas/Client
WORKDIR /usr/src/AppFellas/Client
COPY ./package.json /usr/src/AppFellas/Client
RUN rm -rf node_modules && yarn install --frozen-lockfile && yarn cache clean
COPY . /usr/src/AppFellas/Client
CMD [ "yarn","dev" ]