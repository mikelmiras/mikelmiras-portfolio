FROM node:23-alpine
WORKDIR /app
RUN apk add curl
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]
