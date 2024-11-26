FROM node:20-slim

WORKDIR /src

COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT [ "npm", "run" ]
CMD [ "start" ]
