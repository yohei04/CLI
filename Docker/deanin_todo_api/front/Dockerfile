FROM node:12.18.2-alpine3.9
WORKDIR /front/app
COPY app/package.json /front/app
RUN npm install
COPY . /front/app
# # EXPOSE 5000
CMD ["npm", "start"]
