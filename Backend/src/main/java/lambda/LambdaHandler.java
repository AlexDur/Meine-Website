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

        String httpMethod = request.getHttpMethod();

        // Preflight OPTIONS-Anfrage behandeln
        if ("OPTIONS".equalsIgnoreCase(httpMethod)) {
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(200);
            addCorsHeaders(response);
            return response;
        }




        // JSON body des Requests
        String body = request.getBody();

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
        } catch (Exception e) {
            e.printStackTrace();
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(400);
            response.setBody("{\"message\":\"Invalid input\"}");
            addCorsHeaders(response);
            return response;
        }

        String from = "alexdurach@gmail.com";
        String to = "alexdurach@hotmail.de";
        String subject = "New Contact Form Submission";
        String textBody = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

        try {
            AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
                    .withRegion("eu-central-1").build();

            SendEmailRequest sendEmailRequest = new SendEmailRequest()
                    .withDestination(new Destination().withToAddresses(to))
                    .withMessage(new Message()
                            .withBody(new Body().withText(new Content().withCharset("UTF-8").withData(textBody)))
                            .withSubject(new Content().withCharset("UTF-8").withData(subject)))
                    .withSource(from);

            client.sendEmail(sendEmailRequest);

            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(200);
            response.setBody("{\"message\":\"Email sent successfully\"}");
            addCorsHeaders(response);
            return response;

        } catch (Exception e) {
            e.printStackTrace();
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(500);
            response.setBody("{\"message\":\"Failed to send email\"}");
            addCorsHeaders(response);
            return response;
        }
    }

    // Methode, um CORS-Header zu allen Antworten hinzuzufügen
    private void addCorsHeaders(APIGatewayProxyResponseEvent response) {
        Map<String, String> headers = response.getHeaders();
        if (headers == null) {
            headers = new HashMap<>();
        }
        headers.put("Access-Control-Allow-Origin", "https://s52tbcrlt5.execute-api.eu-central-1.amazonaws.com");
        headers.put("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        headers.put("Access-Control-Allow-Headers", "Content-Type");
        response.setHeaders(headers);
    }
}
