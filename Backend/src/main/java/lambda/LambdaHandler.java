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

public class LambdaHandler implements RequestHandler<APIGatewayProxyRequestEvent, APIGatewayProxyResponseEvent> {

    @Override
    public APIGatewayProxyResponseEvent handleRequest(APIGatewayProxyRequestEvent request, Context context) {
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
            return response;

        } catch (Exception e) {
            e.printStackTrace();
            APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
            response.setStatusCode(500);
            response.setBody("{\"message\":\"Failed to send email\"}");
            return response;
        }
    }
}
