build: bin
	GOOS=linux GOARCH=amd64 CGO_ENABLED=0 go build -o bin/app .
.PHONY: foldgw

bin:
	mkdir -p bin

clean:
	rm -rf bin
