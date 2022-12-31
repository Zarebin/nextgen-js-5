# specify a base image
FROM hub.hamdocker.ir/node:alpine

# install dependencies
WORKDIR /user/app
COPY ./ /user/app
RUN npm install

# default command

CMD ["npm","start"]
