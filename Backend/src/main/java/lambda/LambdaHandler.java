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

        String path = request.getPath();
        String httpMethod = request.getHttpMethod();


        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
        response.setHeaders(getCORSHeaders()); // Setze CORS-Header

        if ("POST".equals(httpMethod) && "/Kontakformular-Emailversand".equals(path)) {
            response = handlePostRoute(request);
        } else if ("OPTIONS".equals(httpMethod) && path.matches("^/.*")){
            response = handleOptionsRoute(request);
        } else {
            response.setStatusCode(404);
            response.setBody("{\"message\":\"Route not found\"}");
        }

        return response;
    }

    // POST Route bearbeiten
    private APIGatewayProxyResponseEvent handlePostRoute(APIGatewayProxyRequestEvent request) {
        // JSON body des Requests
        String body = request.getBody();
        ObjectMapper objectMapper = new ObjectMapper();

        String name = "";
        String email = "";
        String message = "";

        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
        response.setHeaders(getCORSHeaders()); // Setze CORS-Header

        try {
            // JSON body parsen
            JsonNode rootNode = objectMapper.readTree(body);
            name = rootNode.get("name").asText();
            email = rootNode.get("email").asText();
            message = rootNode.get("message").asText();
        } catch (Exception e) {
            e.printStackTrace();
            response.setStatusCode(400);
            response.setBody("{\"message\":\"Invalid input\"}");
            return response;
        }

        String to = "alexdurach@hotmail.de";
        String from = "alexdurach@gmail.com"; // Habe ich in AWS SES verifiziert sein
        String subject = "New Contact Form Submission";
        String textBody = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;

        try {
            AmazonSimpleEmailService client = AmazonSimpleEmailServiceClientBuilder.standard()
                    .withRegion("us-west-2").build();

            SendEmailRequest sendEmailRequest = new SendEmailRequest()
                    .withDestination(new Destination().withToAddresses(to))
                    .withMessage(new Message()
                            .withBody(new Body().withText(new Content().withCharset("UTF-8").withData(textBody)))
                            .withSubject(new Content().withCharset("UTF-8").withData(subject)))
                    .withSource(from);

            client.sendEmail(sendEmailRequest);

            response.setStatusCode(200);
            response.setBody("{\"message\": \"Erfolgreich\"}");

        } catch (Exception e) {
            e.printStackTrace();
            response.setStatusCode(500);
            response.setBody("{\"message\":\"Failed to send email\"}");
        }

        return response;
    }


    // OPTIONS Route bearbeiten
    private APIGatewayProxyResponseEvent handleOptionsRoute(APIGatewayProxyRequestEvent request) {
        APIGatewayProxyResponseEvent response = new APIGatewayProxyResponseEvent();
        response.setStatusCode(200);
        response.setBody("{\"message\":\"CORS preflight successful\"}");
        response.setHeaders(getCORSHeaders()); // CORS-Header setzen
        return response;
    }


    // Methode zum Erstellen der CORS-Header
    private Map<String, String> getCORSHeaders() {
        Map<String, String> headers = new HashMap<>();
        headers.put("Access-Control-Allow-Headers", "Content-Type");
        headers.put("Access-Control-Allow-Origin", "https://adurach.com");
        headers.put("Access-Control-Allow-Methods", "OPTIONS,POST,GET");
        return headers;
    }
}