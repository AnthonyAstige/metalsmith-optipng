Metalsmith wrapper for [optipng](https://www.npmjs.com/package/optipng)

# Example use

```javascript
const optipng = require('metalsmith-optipng')
Metalsmith(__dirname)
	...
	.use(optipng({
		pattern: '**/*.png'
		options: ['-o7']
	})
	...

```

# Parameters

* **pattern** is relative to your source and uses multimatch / glob
* **options** are passed along to optipng
