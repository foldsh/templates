FROM golang:1.15-alpine AS builder
WORKDIR /fold
COPY . .
RUN GOOS=linux CGO_ENABLED=0 go build -o app .

FROM alpine:latest
WORKDIR /fold
COPY --from=builder /fold/app .
CMD ["./app"]
