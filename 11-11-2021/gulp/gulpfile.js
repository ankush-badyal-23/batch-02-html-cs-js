const gulp = require('gulp');
const ts = require('gulp-typescript');
const webp = require('gulp-webp');

const tsProject = ts.createProject('tsconfig.json');


gulp.task('ts', () => {
    return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest('dist'));
});

gulp.task('copy-html', () => {
    return gulp.src('src/*.html').pipe(gulp.dest('dist'));
});

gulp.task('copy-jpg', () => {
    return gulp.src('src/assets/*.jpg').pipe(gulp.dest('dist/assets'));
});

gulp.task('webp', () => {
    return gulp.src('src/assets/*.jpg')
        .pipe(webp({quality:90}))
        .pipe(gulp.dest('dist/assets'))
});

gulp.task('default', gulp.series('ts', 'copy-html', 'copy-jpg', 'webp'));