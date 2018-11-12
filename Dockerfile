FROM node:11.1.0

# Create app directory
WORKDIR /usr

RUN ls

COPY package.json src
COPY package-lock.json src

RUN ls
WORKDIR \\usr\\src

RUN ls

RUN npm install

COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]