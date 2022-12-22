# Specify base image
FROM hub.hamdocker.ir/node:alpine

# Copy directory to working dir
WORKDIR /usr/app
COPY ./ /usr/app

# Install dependencies
RUN npm install

#default command
CMD ["npm", "start"]
