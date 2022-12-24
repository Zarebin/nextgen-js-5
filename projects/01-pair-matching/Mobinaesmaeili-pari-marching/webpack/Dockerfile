FROM hub.hamdocker.ir/nginx:alpine

# Making a directory for files in dist folder (after webpack builds the project)
RUN mkdir -p /var/www/html/webpack
COPY ./dist/index.html /var/www/html/webpack
COPY ./dist/main.js /var/www/html/webpack

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

