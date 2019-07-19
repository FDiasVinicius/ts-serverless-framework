FROM node:8-jessie

RUN npm install serverless-offline --save-dev

# set npm loglevel back to warn
ENV NPM_CONFIG_LOGLEVEL warn

# npm global dependencies
RUN npm config set progress false

# add github to known hosts
RUN mkdir /root/.ssh && chmod 700 /root/.ssh &&\
   ssh-keyscan github.com >> /root/.ssh/known_hosts &&\
   chmod 644 /root/.ssh/known_hosts

# install serverless globaly
RUN npm install -g serverless

RUN npm install -g typescript

# install dependecies first, in a different folder (easier app bind mounting for local development)
WORKDIR /opt
COPY package.json /opt/package.json
RUN npm install && npm cache clean --force

# main dir
WORKDIR /opt/app
COPY . /opt/app

# allows access to the installed npm packages through the $PATH
ENV PATH /opt/node_modules/.bin:$PATH
