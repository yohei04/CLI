FROM node:12.18.2-alpine3.9
WORKDIR /front
COPY package.json /front/package.json
RUN npm install
COPY . /front
# # EXPOSE 5000
CMD ["npm", "start"]
