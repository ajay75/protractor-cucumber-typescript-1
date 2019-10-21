Feature: Home Page
    as a tester I have to verify when I navigate
    to Home page its elements should be displayed.

    @smoke @regression
    Scenario Outline: When I navigate to Home page its elements should be displayed
        Given I should be at "Home Page"
        Then I expect the element "<Header elements>" is present
        Then I expect the element "<Not Global Header elements>" is not present

        Examples:
            | Header elements      | Not Global Header elements |
            | Positions Header     | Broker Martrix page header |
            | Carry Prices Header  | Broker Martrix page header |
            | Broker Matrix Header | Broker Martrix page header |