Feature: Simple test
  In order to run a simple test
  As a Cucumber user
  I want to be able to use assert* in my step definitions

  Scenario: assert_equal
    Given x = 5
    And y = 5
    Then I can assert that x == y

  Scenario: assert_not_equal
    Given x = 5
    And y = 7
    Then I can assert that x != y
