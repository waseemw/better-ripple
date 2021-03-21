# BetterRipple

A material ripple for Angular that does not activate when swiping

## Demo

<https://waseemw.github.io/better-ripple/demo>

## Table Of contents

- [Features](#features)
- [Installation](#installation)
- [API](#api)
- [Example](#example)
- [Development](#development)
- [License](#license)

## Features

- Ripple timeout: timeout before the ripple is activated, so that it doesn't activate while scrolling. It also actives immediately on mousedown, and the click event as
  well.
- Disable on propagation: the ripple can be disabled when the events are propagated from child elements.

## Installation

1. Install with npm using `npm i better-ripple`
2. Import the library in your module with `import { BetterRippleModule } from 'better-ripple';` and add `BetterRippleModule` to your imports
3. Add 'betterRipple' directive to any component to add the ripple effect; betterRipple extends matRipple so anything that worked with matRipple will work with betterRipple

## API

| Attribute             | Default Value  | Description
| --------------------- | -------------- | -------------------------------
| betterRipple          | N/A            | Directive. Required before adding any of the other inputs
| rippleTimeout         | 100            | Number. The timeout between touchdown and ripple activation in ms
| noRippleOnPropagation | N/A            | Declared without value, once declared, any touch or mousedown events on children components will not trigger the event

## Example

You can check the demo for a complete example, and here is the basic usage:

```angular2html
<mat-card betterRipple>
  <mat-card-header>Using betterRipple</mat-card-header>
  <mat-card-content style="margin-bottom: 0">Ripple will not activate while scrolling</mat-card-content>
</mat-card>
```

## Development

### Build library

Run `ng build better-ripple` to build the library. The build artifacts will be stored in the `dist` directory.

### Build & run demo

Before running the demo, build the library as mentioned above, and then run the demo with `ng serve demo`

## License

[MIT License](LICENSE)
