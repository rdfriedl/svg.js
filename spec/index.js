// import all the tests
var testsContext = require.context('./spec', true, /\.js$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
const srcContext = require.context('src', true, /^\.\/(?!index(\.js)?$)/)
srcContext.keys().forEach(srcContext)
