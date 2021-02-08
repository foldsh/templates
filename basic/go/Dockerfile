FROM golang:1.15-alpine AS builder
WORKDIR /fold

# Download dependencies (this can be a little slow)
COPY go.mod ./
RUN go mod download

# Build the binary
COPY . ./
RUN GOOS=linux CGO_ENABLED=0 go build -o app .

FROM foldsh/foldrt:0.0.1
WORKDIR /fold
COPY --from=builder /fold/app ./
EXPOSE 8080
CMD ["./app"]
