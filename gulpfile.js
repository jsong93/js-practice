const requireDir = require('require-dir'),
  gulp = require('gulp'),
  dir = requireDir('./task');

gulp.task('default', gulp.series('script'));
