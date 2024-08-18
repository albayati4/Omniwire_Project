Feature: Yahoo Finance Portfolio Management

  Scenario: User creates a portfolio and manages stocks
    Given the user logs in to Yahoo Finance
    When the user creates a new portfolio named "My Portfolio"
    And the user adds the following stocks to the portfolio:
      | Stock    | Action | Quantity | Date       |
      | Apple    | Buy    | 10       | 2024-08-01 |
      | Tesla    | Buy    | 20       | 2017-12-15 |
      | Tesla    | Sell   | 10       | 2024-06-01 |
      | Facebook | Buy    | 50       | 2017-12-15 |
      | Facebook | Sell   | 10       | 2024-06-01 |
    Then the user should see the updated portfolio
    And the user filters the news for "Tesla"
