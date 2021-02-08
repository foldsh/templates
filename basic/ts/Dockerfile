FROM node:14.15-alpine AS builder
WORKDIR /fold
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

FROM alpine:latest
WORKDIR /fold
COPY --from=builder /fold/dist/app .
EXPOSE 8080
CMD ["./app"]
