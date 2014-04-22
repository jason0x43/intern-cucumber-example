Feature: Square test
  Check that the Square counter works

  Scenario: reset
    Given a new square counter
	When next is called
	And next is called
	And next is called
	And it is reset
	Then I assert that the value is null

  Scenario: one next
    Given a new square counter
	When next is called
	Then I assert that the value is null

  Scenario: two nexts
    Given a new square counter
	When next is called
	And next is called
	Then I assert that the value = 1

  Scenario: four nexts
    Given a new square counter
	And next is called
	And next is called
	And next is called
	And next is called
	Then I assert that the value = 3
