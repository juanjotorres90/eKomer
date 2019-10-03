Check out the <a href="https://juanjotorres.net/projects/ekomer" target="_blank">Demo</a>.


## Task Description

You are the lead FE programmer for a small web shop. You are required to make a simple
page where the user can add products to a cart, and the total of the cart is updated
in real time.

#### API

You will have an API endpoint that returns products with the following structure (assume
your preferred seralization format)

| id      |  name        | price  |
| ------- | :----------: | :----: |
| GR1     |  Green tea   | £3.11  |
| SR1     | Strawberries | £5.00  |
| CF1     |    Coffee    | £11.23 |

There will be an API endpoint to actually do the checkout, charge customer etc, but it won't 
be used here.

## Special conditions:

- The CEO is a big fan of buy-one-get-one-free offers and of green tea. He wants us to add a
rule to do this.
- The COO, though, likes low prices and wants people buying strawberries to get a price
discount for bulk purchases. If you buy 3 or more strawberries, the price should drop to £4.50
- The CTO is a coffee addict. If you buy 3 or more coffees, the price of all coffees should drop
to two thirds of the original price.

We can assume that discount do not change very often so they can be hardcoded in the
application, for display purpose.

Our check-out can scan items in any order, and because the C\*Os change their minds, it needs 
to be flexible regarding our pricing rules.

## Deliverables:

- A shop route where the user can view all available items and add to basket (a quantity selector would be nice).
- A checkout route where the user can view all items in his basket with:
  1. The quantity of each item and the original prices
  2. All the discounts currently applied
  3. The total price of the basket after discounts applied
- Some navigation implementation between the routes.
- A service or similar that is responsible of calculating and persisting total amount.

The application must be demoable without an actual backend (use some approriate
client-side API server for demoing)


# InterviewN1

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
