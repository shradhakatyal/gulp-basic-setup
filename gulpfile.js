var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task('sass', function() {
    return gulp.src('app/style.scss').pipe(sass()).pipe(cssnano()).pipe(gulp.dest('dist/css'));
});

gulp.task('js', function() {
    return gulp.src('app/*.js').pipe(concat('dist/js/bundle.js')).pipe(uglify()).pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('app/*.scss', gulp.series('sass'));
    gulp.watch('app/*.js', gulp.series('js'));
});

gulp.task('default', gulp.series('watch', gulp.parallel('sass', 'js')));