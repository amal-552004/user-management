# Stage 1: Build the React app
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY frontend/ .

# Build the React app (production build)
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

# Copy the build folder from the build stage to nginx's default directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port on which nginx will serve the app
EXPOSE 80

# Command to run nginx
CMD ["nginx", "-g", "daemon off;"]
