FROM golang:1.15-alpine AS builder
WORKDIR /fold

# Download dependencies (this can be a little slow)
COPY go.mod ./
RUN go mod download

# Build the binary
COPY . ./
RUN GOOS=linux CGO_ENABLED=0 go build -o ./bin/app .

FROM foldsh/foldrt:v0.1.2-beta.1
WORKDIR /fold
COPY --from=builder /fold/bin/app ./bin/app
EXPOSE 6123
CMD ["./bin/app"]
