Feature: Test sauce demo login page

  Scenario: Login with valid credentials
    Given I am on the sauce demo login page
    When I enters the username and password
    And I Click on login button
    Then I navigates to home page
    And I Logout from the application