FROM node:alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

ENV HTTP_PROXY http://192.168.23.187:7890
ENV HTTPS_PROXY http://192.168.23.187:7890

RUN npm install

COPY . .

RUN npm run build

