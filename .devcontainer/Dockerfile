# Create a container for a js application using node:20 and npm
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json for npm install layer
COPY ../package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app source code
COPY ../ .

# Default command (optional, can be overridden by docker-compose)
#CMD ["npm", "start"]

