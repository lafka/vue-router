module.exports = function (config) {
  config.set({
    browsers: ['Chrome', 'Firefox', 'Safari'],
    reporters: ['progress'],
    frameworks: ['jasmine'],
    files: [__dirname + '/../test/test.build.js'],
    singleRun: true
  })
}
