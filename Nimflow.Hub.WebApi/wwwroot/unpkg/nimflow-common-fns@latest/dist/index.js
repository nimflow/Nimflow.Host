
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./nimflow-common-fns.cjs.production.min.js')
} else {
  module.exports = require('./nimflow-common-fns.cjs.development.js')
}
