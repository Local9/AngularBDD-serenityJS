# AngularBDD

Scope of this project is to extend test capabilities of an Angular app with BDD testing functionality using CucumberJS and SerenityJS. This also uses [ng-apimock](https://github.com/mdasberg/ng-apimock) to allow you to mock your API for end to end testing without the hassel of setting up a backend.

See below for [Running BDD end-to-end tests with Cucumber and Serenity](##running-bdd-endtoend-tests-with-cucumber-and-serenity)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests with Karma

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
This will compile the steps for cucumber and run the end to end tests, make sure that before running the tests make sure you have started the API server running `npm run api` in another console window if you are not running tests against a test API.
**WORK IN PROGRESS**

## Running BDD end-to-end tests with Cucumber and Serenity

Run `npm run bdd` to execute the end-to-end tests via [CucumberJS](https://github.com/cucumber/cucumber-js) and [SerenityJS](http://serenity-js.org/).
Before running the tests make sure you are serving the app via `ng serve` and also started the API server running `npm run api` in another console window if you are not passThrough tests.
**WORK IN PROGRESS**

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
