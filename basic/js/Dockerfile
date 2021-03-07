FROM foldsh/foldrt:v0.1.2-beta.1-node
WORKDIR /fold

# Download dependencies
COPY package*.json ./
RUN npm install 

COPY . .
EXPOSE 6123
CMD ["node", "src/index.js"]
