FROM node:14.15-alpine AS builder
WORKDIR /fold

# Download dependencies
COPY package.json .
RUN npm install 

# Build
COPY index.js .
RUN npm run build

FROM foldsh/foldrt:0.0.1
WORKDIR /fold
COPY --from=builder /fold/dist/app .
EXPOSE 8080
CMD ["./app"]
