FROM node:18
WORKDIR /app
COPY app.js .
EXPOSE 8080
CMD ["node", "app.js"]

