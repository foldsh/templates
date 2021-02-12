FROM node:14.15-alpine AS builder
WORKDIR /fold

# Download dependencies
COPY package*.json ./
RUN npm install 

# Build
COPY . .
RUN npm run build

FROM foldsh/foldrt:v0.0.3-node
WORKDIR /fold
COPY --from=builder /fold/node_modules ./node_modules
COPY --from=builder /fold/dist ./dist
EXPOSE 8080
CMD ["node", "dist/index.js"]
