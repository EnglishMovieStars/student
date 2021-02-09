FROM  node:14

WORKDIR /app
RUN mkdir /app/public-html
COPY ./public-html /app/public-html
COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm install
CMD ["npm","run","dev"]