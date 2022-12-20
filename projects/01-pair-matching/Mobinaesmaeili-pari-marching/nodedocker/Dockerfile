FROM hub.hamdocker.ir/node:alpine

# WORKDIR /usr/app
# COPY ./ /usr/app
# RUN npm install 

# CMD ["npm","start"]

#FROM node:14
WORKDIR /usr/src/app
COPY ./package*.json /usr/src/app/
RUN npm install
COPY ./ /usr/src/app/
EXPOSE 8888
CMD [ "node", "app.js" ]