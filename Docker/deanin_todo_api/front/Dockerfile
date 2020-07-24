FROM node:12.18.2-alpine3.9
COPY ./app /front/app
WORKDIR /front/app
# COPY package.json ./
# COPY package-lock.json ./
RUN npm install
# # EXPOSE 5000
CMD ["npm", "start"]
