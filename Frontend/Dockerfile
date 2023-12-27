# Verwende ein offizielles Node.js-Image als Basisimage
FROM node:18 AS build

# Setze das Arbeitsverzeichnis im Container
WORKDIR /frontend

# Dateien kopieren des Angular-Projekts in das Arbeitsverzeichnis
COPY ./src /app


# Installieren der Abhängigkeiten und Erstellen des Angular-Build
RUN npm install -g @angular/cli
RUN npm install /frontend/package.json
RUN ng build --configuration=production


# Verwenden eines leichtgewichtigen Nginx-Image als Basisimage für das finale Image
FROM nginx:alpine

# Kopieren des Angular-Builds aus dem vorherigen Build-Image in den Nginx-Container
COPY --from=build /app/dist /usr/share/nginx/html

# Exponieren den Port 80 für den Nginx-Server
EXPOSE 80

# Starten des Nginx-Servers beim Start des Containers
CMD ["nginx", "-g", "daemon off;"]
