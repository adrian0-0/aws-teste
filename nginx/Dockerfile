# FROM nginx:latest
# RUN rm /etc/nginx/conf.d/*
# COPY nginx.conf /etc/nginx/conf.d
# WORKDIR /var/www/html

# nginx/Dockerfile

FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

EXPOSE 80
EXPOSE 443