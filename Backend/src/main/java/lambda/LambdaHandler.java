package lambda;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyRequestEvent;
import com.amazonaws.services.lambda.runtime.events.APIGatewayProxyResponseEvent;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailService;
import com.amazonaws.services.simpleemail.AmazonSimpleEmailServiceClientBuilder;
import com.amazonaws.services.simpleemail.model.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.HashMap;
import java.util.Map;

public class LambdaHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
        context.getLogger().log("Lambda function started");

        String httpMethod = request.getHttpMethod();
        context.getLogger().log("HTTP Method: " + httpMethod);

        // Preflight OPTIONS-Anfrage behandeln
        if ("OPTIONS".equalsIgnoreCase(httpMethod)) {
            context.getLogger().log("Handling preflight OPTIONS request");
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(200);
            return response;
        }

        // JSON body des Requests
        String body = request.getBody();
        context.getLogger().log("Request body received: " + body);

        // Überprüfen, ob der Body vorhanden ist
        if (body == null || body.isEmpty()) {
            context.getLogger().log("Body is empty or null");
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(400);
            response.setBody("{\"message\":\"Invalid input: Body is empty or null\"}");
            return response;
        }

        // JSON Parser (ObjectMapper) initialisieren
        ObjectMapper objectMapper = new ObjectMapper();

        // Variablen für den Name, die Email und die Nachricht
        String name = "";
        String email = "";
        String message = "";

        try {
            // JSON body parsen
            JsonNode rootNode = objectMapper.readTree(body);
            name = rootNode.get("name").asText();
            email = rootNode.get("email").asText();
            message = rootNode.get("message").asText();
            context.getLogger().log("Parsed JSON - Name: " + name + ", Email: " + email + ", Message: " + message);
        } catch (Exception e) {
            context.getLogger().log("Error parsing JSON: " + e.getMessage());
            e.printStackTrace();
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(400);
            response.setBody("{\"message\":\"Invalid input: JSON parsing failed\"}");
            return response;
        }

        String from = "alexdurach@gmail.com";
        String to = "alexdurach@hotmail.de";
        String subject = "New Contact Form Submission";
        String textBody = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

        try {
            context.getLogger().log("Sending email to: " + to);
            AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
                    .withRegion("eu-central-1").build();

            SendEmailRequest sendEmailRequest = new SendEmailRequest()
                    .withDestination(new Destination().withToAddresses(to))
                    .withMessage(new Message()
                            .withBody(new Body().withText(new Content().withCharset("UTF-8").withData(textBody)))
                            .withSubject(new Content().withCharset("UTF-8").withData(subject)))
                    .withSource(from);

            client.sendEmail(sendEmailRequest);
            context.getLogger().log("Email sent successfully");

            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(200);
            response.setBody("{\"message\":\"Email sent successfully\"}");
            return response;

        } catch (Exception e) {
            context.getLogger().log("Failed to send email: " + e.getMessage());
            e.printStackTrace();
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(500);
            response.setBody("{\"message\":\"Failed to send email\"}");
            return response;
        } finally {
            context.getLogger().log("Lambda function finished");
        }
    }

    // Methode, um CORS-Header zu allen Antworten hinzuzufügen
/*    private void addCorsHeaders(APIGatewayProxyResponseEvent response) {
        Map<String, String> headers = response.getHeaders();
        if (headers == null) {
            headers = new HashMap<>();
        }
        headers.put("Access-Control-Allow-Origin", "https://adurach.com");
        headers.put("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        headers.put("Access-Control-Allow-Headers", "Content-Type");
        response.setHeaders(headers);
    }*/
}
