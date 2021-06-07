package requests;

import io.restassured.http.Method;
import io.restassured.response.Response;
import net.minidev.json.JSONObject;

import java.util.HashMap;

public class POSTRequest extends BaseRequest{

	public Response postRequest(final JSONObject payload, final String path){
		httpRequest.header("Content-Type", "application/json");
		return httpRequest.body(payload.toJSONString()).request(Method.POST, path);
	}

	public Response postRequest(final String payloadInStringFormat, final String path, final HashMap<String, String> rheaders) {
		httpRequest.header("Content-Type", "application/json");
		rheaders.entrySet().stream().forEach((e) -> httpRequest.header(e.getKey(), e.getValue()));
		return httpRequest.body(payloadInStringFormat).request(Method.POST, path);
	}

	public Response postRequest(final Object payload, final String path, final HashMap<String, String> rheaders) {
		httpRequest.header("Content-Type", "application/json");
		rheaders.entrySet().stream().forEach((e) -> httpRequest.header(e.getKey(), e.getValue()));
		return httpRequest.body(payload).request(Method.POST, path);
	}


}
