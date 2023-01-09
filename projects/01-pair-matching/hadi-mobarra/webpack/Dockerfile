FROM hub.hamdocker.ir/node:alpine as newwebpack

#working directory
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY ./ /app/
# run build for webpack
RUN npm run build

#-----------------------------------------------
FROM hub.hamdocker.ir/nginx:alpine
COPY --from=newwebpack /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf


EXPOSE 80
