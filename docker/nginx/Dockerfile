FROM node:13.12.0-alpine as build

WORKDIR /app/frontend
ARG REACT_APP_SOCKET_HOST
ENV REACT_APP_SOCKET_HOST https://cribbage.live/
COPY ./client/package.json ./
COPY ./client/package-lock.json ./
RUN npm ci --silent
COPY ./client/ ./
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/frontend/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]