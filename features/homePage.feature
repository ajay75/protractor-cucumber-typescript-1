Feature: Home Page

    @smoke @regression
    Scenario: I should be at Home page
        Given I should be at "Home Page"
        Then I expect the element "Positions Header" is displayed
        Then I expect the element "Carry Prices Header" is displayed
        Then I expect the element "Broker Matrix Header" is displayed
