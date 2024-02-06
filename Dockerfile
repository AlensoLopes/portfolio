FROM node:18.17.1-alpine as builder

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install -g serve
RUN npm run build

# production environment
FROM nginx:1.22.0
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder ./build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]