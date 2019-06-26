[![Build Status](https://travis-ci.org/pelevesque/are-substrings-under-minimum-occurrences.svg?branch=master)](https://travis-ci.org/pelevesque/are-substrings-under-minimum-occurrences)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/are-substrings-under-minimum-occurrences/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/are-substrings-under-minimum-occurrences?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# are-substrings-under-minimum-occurrences

Checks if substrings are under minimum occurrences in a string.

## Node Repository

https://www.npmjs.com/package/@pelevesque/are-substrings-under-minimum-occurrences

@related:  
https://github.com/pelevesque/are-substrings-over-maximum-occurrences  
https://github.com/pelevesque/are-substrings-under-minimum-density  
https://github.com/pelevesque/are-substrings-over-maximum-density  

## Installation

`npm install @pelevesque/are-substrings-under-minimum-occurrences`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Requiring

```js
const areSubstringsUnderMinimumOccurrences = require('@pelevesque/are-substrings-under-minimum-occurrences')
```

### One Check

```js
// under occurrences returns true
// 'a' has 4 occurrences, less than 8
const str = 'aaaabbbb'
const checks = { 'a': 8 }
const result = areSubstringsUnderMinimumOccurrences(str, checks)
// result === true
```

```js
// equal to occurrences returns false
const str = 'aaaabbbb'
const checks = { 'a': 4 }
const result = areSubstringsUnderMinimumOccurrences(str, checks)
// result === false
```

```js
// over occurrences returns false
const str = 'a man, a hog, and another hog'
const checks = { 'hog': 1 }
const result = areSubstringsUnderMinimumOccurrences(str, checks)
// result === false
```

### Multiple Checks

```js
// when one is under occurrences, it returns true ('a' is under 8)
const str = 'aaaabbbb'
const checks = { 'a': 8, 'b': 4 }
const result = areSubstringsUnderMinimumOccurrences(str, checks)
// result === true
```

```js
// when all are over or equal to occurrences, it returns false
const str = 'a man, a hog, and another hog'
const checks = { 'a': 1, 'hog': 1 }
const result = areSubstringsUnderMinimumOccurrences(str, checks)
// result === false
```
