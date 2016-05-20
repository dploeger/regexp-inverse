# regexp-inverse [![Build Status](https://secure.travis-ci.org/dploeger/regexp-inverse.png?branch=master)](http://travis-ci.org/dploeger/regexp-inverse)

The inverted version of the native JavaScript RegExp object.

## Getting Started
Install the module with: `npm install regexp-inverse`

```javascript
var RegExpInverse = require('regexp-inverse');
var regExp = new RegExpInverse('.*');

regExp.test('foobar'); # Returns false
```

## Documentation

This is a very simple module, that just reverses the outputs of the 
JavaScript RegExp object. So if the RegExp object matches something, 
regexp-inverse doesn't and vice versa.

When you use the exec-method of the object and the original RegExp wouldn't 
match, regexp-inverse returns an array containing the input text.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding 
 style. Add unit tests for any new or changed functionality. Lint and test 
  your code using [Grunt](http://gruntjs.com/).

## License
Copyright (c) 2016 Dennis Ploeger  
Licensed under the MIT license.
