# Verwende ein offizielles Node.js-Image als Basisimage
FROM node:18 as build

# Setze das Arbeitsverzeichnis im Container
WORKDIR /app

# Kopiere die Dateien des Angular-Projekts in das Arbeitsverzeichnis
COPY . .

# Installiere die Abhängigkeiten und erstelle das Angular-Build
RUN npm install -g @angular/cli
RUN npm install
RUN ng build --prod

# Verwende ein leichtgewichtiges Nginx-Image als Basisimage für das finale Image
FROM nginx:alpine

# Kopiere den Angular-Build aus dem vorherigen Build-Image in den Nginx-Container
COPY --from=build /app/dist /usr/share/nginx/html

# Exponiere den Port 80 für den Nginx-Server
EXPOSE 80

# Starte den Nginx-Server beim Start des Containers
CMD ["nginx", "-g", "daemon off;"]
