FROM node

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

EXPOSE 1406

CMD [ "npm", "run", "dev" ]