# 1. Use Node.js official image
FROM node:18

# 2. Set working directory inside container
WORKDIR /app

# 3. Copy package.json & install dependencies
COPY package*.json ./
RUN npm install

# 4. Copy entire project
COPY . .

# 5. Expose port (your app runs here)
EXPOSE 3000

# 6. Start command
CMD ["npm", "start"]
