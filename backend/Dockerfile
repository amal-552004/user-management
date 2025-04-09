# Utilise l'image officielle Node.js
FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie les fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie tout le reste
COPY . .

# Expose le port 5000
EXPOSE 5000

# Commande de démarrage
CMD ["npm", "start"]
