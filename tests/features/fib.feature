Feature: Fibonacci test
  Check that the Fibonacci counter works

  Scenario: reset
    Given a new fib counter
	When next is called
	And next is called
	And next is called
	And it is reset
	Then I assert that the value is null

  Scenario Outline: nexting
    Given a new fib counter
	When next is called <times> times
	Then I assert that the value = <value>

	Examples:
		| times | value |
	    |   2   |   1   |
	    |   3   |   2   |
	    |   5   |   5   |
