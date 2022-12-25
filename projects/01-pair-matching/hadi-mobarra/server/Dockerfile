# from what image we want to build from
FROM hub.hamdocker.ir/node:18.12.1-alpine

# directory to hold the application code inside the image
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ /usr/src/app

CMD ["node", "server.js"]

