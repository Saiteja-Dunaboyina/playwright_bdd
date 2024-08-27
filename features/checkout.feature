Feature: Test  sauce demo checkout page

  Scenario: As a user, I can log into the secure area  and complete a purchase
    Given I am on the sauce demo login page
    When I enters the username and password
    And I Click on login button
    Then I navigates to home page
    Then I added products to the cart
    Then I proceed to checkout
    Then I enter the all information 
    And Click on continue button
    Then Click on finish button
    Then Click backToHome button
    And I Logout from the application