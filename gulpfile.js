const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compileSass() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

function watchFiles() {
  gulp.watch('sass/**/*.scss', compileSass);
}

exports.build = gulp.series(compileSass);
exports.watch = gulp.series(exports.build, watchFiles);
