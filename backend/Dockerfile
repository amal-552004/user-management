# -------- Etape 1 : Build --------
    FROM node:20-alpine AS build

    WORKDIR /app
    
    # Copy package.json and package-lock.json first to install dependencies
    COPY package*.json ./
    RUN npm install --production
    
    # Copy the rest of the app code
    COPY . .
    
    # -------- Etape 2 : Run --------
    FROM node:20-alpine
    
    WORKDIR /app
    
    # Copy everything from the build stage
    COPY --from=build /app /app
    
    # Expose the port for your backend
    EXPOSE 5000
    
    # Command to run the app (adjust this to match your entry point)
    CMD ["node", "server.js"]
    