FROM hub.hamdocker.ir/node:alpine as mywebpack

# Making a directory for files in dist folder (after webpack builds the project)
WORKDIR /app
COPY ./package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build
#----------------------------------------


FROM hub.hamdocker.ir/nginx:alpine
# Specify default config for nginx
COPY --from=mywebpack /app/dist /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf 

EXPOSE 80
