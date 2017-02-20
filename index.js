const _ = require('lodash')

module.exports = (options) => {
	// Options and defaults
	const opts = options || {}
	if (!opts.pattern) {
		opts.pattern = '**/*.png'
	}

	// The actual plugin returned from `.use(...)` call
	return function(files, metalsmith, done) {
		_.forEach(files, (file, filename) => {
			console.log(filename)
		})

		setImmediate(done)
	}
}
