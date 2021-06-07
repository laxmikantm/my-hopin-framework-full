# Cypress Integration tests

## Installation

Use the npm package manager.
Cypress and Mocha reporter dependencies have been added

```bash
cd frontend/
npm install
```

## To Run Frontend tests

1. Make sure Backend & Frontend is up and running (kindly refer dev Readme.md for more details)
2. To run tests

```node
cd frontend/
npm run pretest
npm run integration-test
```

3.  To generate test report

```node
cd frontend/
npm run posttest
```

report will be generated in /reports folder

## Future improvement

- To add better locators & ids
- To use more cypress out of box functionalities to traverse through the DOM elements
- To create few custom commands
- To do granular validations for individual controls/elements on the page
Thanks
(c) Laxmi.somni@gmail.com
