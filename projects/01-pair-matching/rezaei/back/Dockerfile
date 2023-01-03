FROM node:alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install --production
CMD ["node", "index.js"]