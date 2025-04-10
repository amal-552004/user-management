# -------- Etape 1 : Build de l'app React --------
    FROM node:20-alpine AS build

    WORKDIR /app
    
    COPY package*.json ./
    RUN npm install
    COPY . .
    RUN npm run build
    
    # -------- Etape 2 : Serve avec Nginx --------
    FROM nginx:alpine
    
    COPY --from=build /app/build /usr/share/nginx/html
    
    # Copie fichier config nginx (optionnel si besoin)
    # COPY nginx.conf /etc/nginx/nginx.conf
    
    EXPOSE 80
    