FROM hub.hamdocker.ir/node:alpine as mywebpack
# RUN mkdir -p /usr/src/app
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

# ---------------------------
FROM hub.hamdocker.ir/nginx:alpine

COPY --from=mywebpack /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


