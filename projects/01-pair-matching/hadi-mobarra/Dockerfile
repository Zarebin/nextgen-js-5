FROM hub.hamdocker.ir/nginx:alpine


RUN mkdir -p /var/www/html/webpack
COPY ./dist/index.html /var/www/html/webpack
COPY ./dist/bundle.js /var/www/html/webpack
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
