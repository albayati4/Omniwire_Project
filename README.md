# AI-Driven Test Framework with Playwright and Cucumber

This project is an AI-driven test framework that allows writing test cases in natural language. The framework integrates Playwright for browser automation and Cucumber for BDD-style testing with TypeScript.

### Date: 08/18/2024

### By: Abdullah Albayati

## Project Structure

```plaintext
├── features/
│   └── yahoo-finance.feature   # BDD feature file containing the natural language scenarios
├── step-definitions/
│   └── yahoo-finance.steps.ts  # Step definitions corresponding to the feature file
├── src/
│   └── ai-integration.ts       # AI-driven test case integration (future implementation)
├── world.ts                    # Custom world definition for managing browser and page instances
├── cucumber.ts                 # Cucumber setup file
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation
```

#### Prerequisites

- Node.js: Ensure you have Node.js version 18 or later. Run `node -v` to check.
- TypeScript: Installed via npm or globally in your environment.

### Key Components

#### Cucumber and Playwright Integration

- Cucumber (cucumber.ts): Sets up Cucumber with TypeScript and integrates Playwright for browser automation. It includes BeforeAll and AfterAll hooks to manage the browser lifecycle and ensure resources are properly allocated and released.

- CustomWorld (world.ts): Defines a custom world that manages the browser and page instances. It enables sharing these instances across different steps within the same scenario.

#### AI Integration (src/ai-integration.ts)

- This file is intended for future implementation, where AI-driven test case generation and execution can be integrated. This will allow for dynamic creation of test steps based on natural language input.

#### Step Definitions (yahoo-finance.steps.ts)

- This file contains the implementation of step definitions for the scenarios defined in the yahoo-finance.feature file. Each step corresponds to an action or assertion in the browser, interacting with the Yahoo Finance website.

#### TypeScript Configuration

- TypeScript: Provides static typing, helping catch errors early and improving code quality. The tsconfig.json file includes settings tailored to this project, ensuring compatibility with Cucumber and Playwright.

#### Conclusion

- This project demonstrates the power of combining Playwright for browser automation with Cucumber for BDD. While there are complexities involved in setting up the framework, the result is a flexible and scalable system that can grow to include AI-driven test generation and execution.
