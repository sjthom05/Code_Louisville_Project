var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('concatJS', function(){
    return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/dist/js/bootstrap.js'])
});

gulp.task('default', function(){

});