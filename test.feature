Feature: Core: Scenarios, Steps, Mappings

  Cucumber is a tool for executing business-readable specifications
  written in Gherkin. The basic unit of both specification and
  execution is the Scenario. A Scenario is a list of steps, each of
  which representing an action performed by a user (or user agent)
  on the software product under development. When a Scenario is
  executed, its steps are applied to the software system in the order
  they are contained in the Scenario.

  Gherkin is not a programming language, so in order to execute steps
  written in it, Cucumber must first look up a mapping from the text of
  each step to a function. If such a mapping exists, the function is
  executed, and the result is communicated to the user.

  Scenario: All steps passing means the scenario passes
    Given a scenario with:
      """
      When I add 4 and 5
      Then the result is 9
      """
    And the step "I add 4 and 5" has a passing mapping
    And the step "the result is 9" has a passing mapping
    When Cucumber executes the scenario
    Then the scenario passes
