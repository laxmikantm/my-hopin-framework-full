

# ==  Instructions ==


All tests are build using standard packaging solution: Maven. & could be centrally deployed using standard POM.XML Test are written in Cucumber BDD fashion

#### System Requirements: 

OS: Mac OS X or Win 8

Java 8 SDK

## Assumptions



## To Run the Tests

#### Option1 (preferred)
a) Import Maven Dependencies 

b) Check the BDD Feature files located at:

```> src/test/resources/features```

b) In IntelliJ Go to **src> test> runners> RunCucumberIT** 

c) Right click and Run

#### Option2

a) From commandline invoke `mvn clean test` 

### Note:

1) The Test Runner will create Cucumber report at below folder `target/cucumber-html-report`

<img width="823" alt="Screenshot 2021-06-01 at 00 54 17" src="https://user-images.githubusercontent.com/7977484/120249810-f73e1280-c273-11eb-8914-4c0837ee57f4.png">

2) Also, a interactive Donut report will be created in ${project.build.directory}/donut
Command: `mvn clean integration-test generate` * Note: This plugin might need some local customisation.
   
## Future Improvements Planned

1) Modularise Wiremock functionality.
2) Add more granular assertions
3) Add API tests for other requests GET, PUT, DELETE, PATCH
4) Implement Wiremock server start and stop through cucumber hook implementation


Please feel free to get back to me on the below email:
`laxmi.somni@gmail.com`

Many Thanks

(c) L Somni 
