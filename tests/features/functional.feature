Feature: Functional test
  In order to run a simple functional test
  As a Cucumber user
  I want to be able to manipulate the browser

  Scenario: Loading a page
    Given the relative url ./data/basic.html
	When I open the page
    Then I should see "Functional test" as the page title
