# Verwende ein offizielles Node.js-Image als Basisimage
FROM node:18 AS build

# Setze das Arbeitsverzeichnis im Container
WORKDIR /frontend

# Kopiere die package.json (und ggf. package-lock.json) Dateien
COPY ./frontend/package*.json ./

# Installiere die Abhängigkeiten
RUN npm install

# Kopiere den restlichen Quellcode
COPY ./package*.json ./

# Erstelle den Angular-Build
RUN npm install -g @angular/cli
RUN ng build --configuration=production

# Verwenden eines leichtgewichtigen Nginx-Image als Basisimage für das finale Image
FROM nginx:alpine

# Kopiere das Angular-Build aus dem vorherigen Build-Image in den Nginx-Container
COPY ./src /app

ENV PORT=8080

# Exponiere den Port 80 für den Nginx-Server
EXPOSE 80

# Starte den Nginx-Server beim Start des Containers
CMD ["nginx", "-g", "daemon off;"]
