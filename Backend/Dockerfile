FROM ubuntu:latest
LABEL authors="alexd"

ENTRYPOINT ["top", "-b"]

# ...

# Setze eine Umgebungsvariable, um den Entwicklungsmodus zu aktivieren
ENV SPRING_PROFILES_ACTIVE=development

# ...

# Starte deine Spring Boot-Anwendung im Debug-Modus
CMD ["java", "-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005", "-jar", "website-app.jar"]
