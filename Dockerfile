# base image
FROM node:latest

# set working directory
RUN mkdir /Users/boss/demoofconcepts
# copy all file to corrent directory
COPY . /Users/boss/demoofconcepts

WORKDIR /Users/boss/demoofconcepts

RUN npm install

ADD /Users/boss/demoofconcepts

RUN npm build

CMD npm start