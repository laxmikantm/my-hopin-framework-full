package requests;
/**************************
 *  (C) L Somni            *
 ***************************/

import Utils.Helper;
import io.restassured.RestAssured;
import io.restassured.http.Method;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;


public class GET_Request extends BaseRequest{
    RequestSpecification httpRequest = RestAssured.given();
    Response response;

    public void chooseEndPoint() {
        httpRequest.baseUri(Helper.URL);
    }

    public Response getRequest() {
        Response request = httpRequest.request(Method.GET);
        return request;
    }

}
