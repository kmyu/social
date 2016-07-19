var gulp = require('gulp')

gulp.task('hi', function(){
	console.log('hi world');
})

gulp.task('hello',['hi'], function(){
	console.log('hello world');
})