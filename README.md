# EZON

> E-z (easy) Object Notation.

## Installation

`npm i --save ezon`

## Usage
Some working examples.

### Basic

These all produce the same output `{ hello: 'world', bacon: 'truth' }`.

```js
const ezon = require('ezon');

// Actual json
ezon('{"hello": "world", "bacon": "truth"}');

// No curly braces
ezon('"hello": "world", "bacon": "truth"');

// Messing around with the quotes
ezon(`hello: 'world', 'bacon': truth`);

// Whatever this is..
ezon(`{hello:world, bacon: 'truth'}`);

// Bare minimum
ezon('hello:world,bacon:truth');
```

### Key default

When key and value are the same, you may only supply the key.

```js
const ezon = require('ezon');

// Produces { foo: 'foo', cake: 'cake', hello: 'world', bacon: 'bacon' }
ezon('foo,cake,hello:world,bacon');
```

### Configured key default

```js
const ezon = require('ezon');

// Produces { message: 'bacon', hello: 'world' }
ezon('foo,cake,hello:world,bacon', {defaultKey: 'message'});

// Well, what did you expect? You can only use the same key once.
```

## Known limitations

At the moment, ezon doesn't support nested objects due to lacking support for recursion in javascript regex.

## License

MIT