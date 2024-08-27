Feature: API Testing

  Scenario: API testing using bookstore API
    Given I generate a token
    When I request to retrieve all existing booking IDs from the API
    Then I should be able to create a new booking using POST method
    Then I can able to Update a current booking
    Then I am able to Update a current booking with a partial payload
    Then I can delete a particular user