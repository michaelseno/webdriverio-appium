FROM node:18-slim

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npx", "wdio", "run", "./wdio.conf.js"]
