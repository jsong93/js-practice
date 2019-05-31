const gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  babel = require('gulp-babel');

gulp.task('script', done => {
  // 打包es6 一定要用babel  不然报错
  gulp
    .src('es6.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(rename('script.js'))
    .pipe(gulp.dest('build'));

  done();
});
