FROM node:alpine AS builder
WORKDIR /projectfiles/
COPY . .
CMD ["npm","install"]
CMD ["webpack"]

FROM nginx:alpine
COPY --from=builder /projectfiles/dist /usr/share/nginx/html
COPY --from=builder /projectfiles/nginx /etc/nginx/conf.d
