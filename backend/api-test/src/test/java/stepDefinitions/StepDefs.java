package stepDefinitions;

import cucumber.TestContext;
import cucumber.api.java.en.*;
import io.restassured.response.Response;
import io.restassured.response.ResponseBody;
import middleware.Controller;
import net.minidev.json.JSONObject;
import org.junit.Assert;
import requests.GET_Request;
import requests.POSTRequest;

import java.util.List;
import java.util.stream.IntStream;


import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import static org.hamcrest.CoreMatchers.equalTo;
import static org.hamcrest.CoreMatchers.is;

/**************************
 *  (C) L Somni            *
 ***************************/

public class StepDefs {
    TestContext testContext;
    Response response;
    Controller controller;

    GET_Request get_request = new GET_Request();
    POSTRequest postRequest = new POSTRequest();

    public StepDefs(TestContext context) {
        testContext = context;
        response = testContext.getResponse();
        controller = testContext.getController();
    }


    @When("I make a POST request with name {string}")
    public void makeAPostRequest(final String name) {
        JSONObject requestParams = new JSONObject();
        requestParams.put("name", name);
        response = postRequest.postRequest(requestParams,"/");
    }

    @Then("I get success response {int} code")
    public void iGetSuccessResponseCode(final int expectedStatusCode) {
        Assert.assertThat(response.statusCode(), is(equalTo(expectedStatusCode)));
    }

    @And("response contains correct structure for the customers end point")
    public void responseContainsStructure() {
        response.then().body(matchesJsonSchemaInClasspath("output_schema.json"));
    }


    @io.cucumber.java.en.Given("I use default end point")
    public void iUseDefaultEndPoint() {
        postRequest.chooseEndPoint();
        testContext.setMock(false);
    }

    @And("response contains names")
    public void itContainsUserName(List<List<String>> names) {
        ResponseBody body = response.getBody();
        String bodyAsString = body.asString();

        IntStream.range(0, names.get(0).size()).forEach(i -> {
            Assert.assertEquals(true, bodyAsString.toLowerCase().contains(names.get(0).get(i).toLowerCase()));
        });
    }

    @And("response contains ids")
    public void itContainsIds(List<List<String>> ids) {
        ResponseBody body = response.getBody();
        String bodyAsString = body.asString();

        IntStream.range(0, ids.get(0).size()).forEach(i -> {
            Assert.assertEquals(true, bodyAsString.toLowerCase().contains(ids.get(0).get(i).toLowerCase()));
        });
    }
}
