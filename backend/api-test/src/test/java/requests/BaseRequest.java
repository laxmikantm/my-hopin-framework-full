package requests;

import Utils.Helper;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class BaseRequest {

    RequestSpecification httpRequest = RestAssured.given();
    Response response;

    public void chooseEndPoint() {
        httpRequest.baseUri(Helper.LOCAL_URL);
    }

    public void chooseEndPoint(final String partialPath){
        httpRequest.baseUri(Helper.LOCAL_URL + partialPath);
    }

}
