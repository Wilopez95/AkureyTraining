const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('task4/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('task4/css/'))
    .pipe(browserSync.stream())
   })

