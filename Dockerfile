# Use Node.js LTS Alpine base image
FROM node:lts-alpine

# Set working directory
WORKDIR /src/app

# Copy app files and package.json
COPY . .

# Install dependencies 
RUN npm install

# Build Next.js app 
RUN npm run build

# Expose port
EXPOSE 3000

# Start Next.js in production mode
CMD ["npm", "run", "start"]