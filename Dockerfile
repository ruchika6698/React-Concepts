# base image
FROM node

# set working directory
RUN mkdir /usr/src/demoofconcepts
# copy all file to corrent directory
COPY . /usr/src/demoofconcepts

WORKDIR /usr/src/demoofconcepts
# add path
ENV PATH /usr/src/demoofconcepts/node_modules/.bin:$PATH

RUN npm install node-sass
RUN npm install

# ADD /usr/src/demoofconcepts

# RUN npm build

CMD npm start