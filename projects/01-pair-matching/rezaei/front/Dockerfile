FROM hub.hamdocker.ir/node:alpine AS builder
WORKDIR /projectfiles
COPY . .
RUN npm install
RUN npm run build

FROM hub.hamdocker.ir/nginx:alpine
COPY --from=builder /projectfiles/dist /usr/share/nginx/html
COPY --from=builder /projectfiles/nginx /etc/nginx/conf.d

EXPOSE 80