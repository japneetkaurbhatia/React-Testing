https://github.com/DavidArmendariz/react-testing-course

brew install node

yarn create react-app react-testing --template typescript

yarn start
yarn build
yarn eject

describe -> test suits

TDD :
- failing test case
- pass test case
- refactor code

yarn upgrade --latest

render() in test add <body> and <div>
    <body>
      <div>
        <h1>
          ok
        </h1>
      </div>
    </body>

yarn add -D ts-jest 

AllBy returns array

FireEvent called when whole functions is complete (whole text execute)

UserEvent called char by char

Exclude Covearage of index.tsx etc
 "jest": {
    "collectCoverageFrom": [
      "src/**/*.{ts,tsx,js,jsx}",
      "!src/serviceWorker.ts",
      "!src/index.tsx",
      "!src/**/*.d.ts"
    ]
  }

Debugging
https://create-react-app.dev/docs/debugging-tests/

https://pokeapi.co/

https://github.com/testing-library/jest-dom