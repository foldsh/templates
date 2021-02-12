FROM foldsh/foldrt:v0.0.3-node
WORKDIR /fold

# Download dependencies
COPY package*.json ./
RUN npm install 

COPY . .
EXPOSE 8080
CMD ["node", "src/index.js"]
