var autoprefixer = require('autoprefixer');
var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Set asset paths.
var paths = {
    sass: 'src/styles/**/*.scss',
};

/**
 * Compile Sass and run stylesheet through PostCSS.
 */
gulp.task('postcss', function() {
    return gulp.src('src/styles/style.scss')
        .pipe(plumber({ errorHandler: handleErrors }))
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'expanded'
        }))
        .pipe(postcss([
            autoprefixer({ browsers: ['last 2 version'] }),
        ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

/**
 * Process tasks and reload browsers.
 */
gulp.task('watch', function() {
    gulp.watch(paths.sass, ['styles']);
});

/**
 * Handle errors.
 */
function handleErrors() {
    var args = Array.prototype.slice.call(arguments);
    notify.onError({
        title: 'Task Failed [<%= error.message %>',
        message: 'See console.',
        sound: 'Sosumi'
    }).apply(this, args);
    gutil.beep();
    this.emit('end');
}