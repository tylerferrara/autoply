FROM node:18-alpine
ENV NODE_ENV=dev
WORKDIR /app
COPY . .
RUN npm i
CMD ["npm", "run", "dev"]