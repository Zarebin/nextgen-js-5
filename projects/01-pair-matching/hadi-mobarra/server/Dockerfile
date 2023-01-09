# from what image we want to build from
FROM hub.hamdocker.ir/node:alpine

# directory to hold the application code inside the image
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install

CMD ["npm", "start"]

EXPOSE 8086
