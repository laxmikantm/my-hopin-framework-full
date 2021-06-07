package Utils;
/**************************
 *  (C) L Somni            *
 ***************************/

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

public class Helper {

    public static final String URL = "TBD";
    public static final String LOCAL_URL = "http://localhost:3001";

    public static class ConfigurationException extends RuntimeException {

        public ConfigurationException(final String message) {
            super(message);
        }
    }

    public static Map<String, Object> json_to_map(File sampleJson) throws JsonParseException, JsonMappingException,
            IOException {

        Map<String, Object> map;

        ObjectMapper mapper = new ObjectMapper();
        map = mapper.readValue(sampleJson,
                new TypeReference<HashMap<String, Object>>() {
                });

        return map;
    }


}


