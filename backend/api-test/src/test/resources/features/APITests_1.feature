Feature:  API Test
  Description: Here we test the High level API health for the API end points

  @api_test
  Scenario: Smoke test
    Given I use default end point
    When I make a POST request with name "TestName"
    Then I get success response 200 code
    And response contains correct structure for the customers end point
    And response contains names
    |Americas Inc.|Caribian Airlnis|MacroSoft|United Brands|Bananas Corp|XPTO.com|
    And response contains ids
      |1|2|3|4|5|6|