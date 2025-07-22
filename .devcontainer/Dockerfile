# Create a container for a js application using node:20 and npm
FROM node:20

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install
# Copy the rest of the application code
COPY . .
# Expose the port the app runs on
EXPOSE 3000
# Start the application
CMD ["npm", "start"]
