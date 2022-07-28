FROM node:16-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm build
FROM nginx:1.21.0-alpine as production
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 3000
 #CMD ["npm","start"]
 EXPOSE 80
 CMD ["nginx","-g","daemon off"]