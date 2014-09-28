var gulp = require('gulp');
var path = require('path');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngTemplates = require('gulp-ng-templates');

var paths = {
	scripts: ['src/**/*.js'],
	templates: ['src/**/*.tpl.html']
};

gulp.task('templates', function () {
	var dest = path.join(__dirname, 'dist');

	return gulp.src(paths.templates)
		.pipe(ngTemplates({
			module: 'ngPaginator.templates',
			filename: 'angular-paginator.tpl.min.js',
			standalone: false,
		}))
		.pipe(gulp.dest(dest));
});

gulp.task('scripts', function () {
	var dest = path.join(__dirname, 'dist');

	return gulp.src(paths.scripts)
		.pipe(uglify())
		.pipe(concat('angular-paginator.min.js'))
		.pipe(gulp.dest(dest));
});

gulp.task('build', ['templates', 'scripts']);

gulp.task('default', ['build']);