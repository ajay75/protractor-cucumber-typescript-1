Feature: Feature name

    Scenario: Scenario name
        Given I should be at "https://learn.letskodeit.com/p/practice" home page
        Then I type "Tilek" to "#name"
        Then I resize the screen 600 px width by 400 px height
        Then I scroll to element "#mousehover"
        Then I maximize the screen
        Then I scroll to element "#bmwradio"
        Then I click to "#bmwradio"
        Then I check "#bmwradio" is selected
        Then I check "#benzradio" is not selected
        Then I check "#hondaradio" is enabled
        Then I check "#carselect" is enabled
        Then I focus on "a[href='#top']" element
        Then I check element "#mousehover" is displayed
        Then I check element "a[href='#top']" is not displayed
