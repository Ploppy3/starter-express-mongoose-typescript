// grab our gulp packages
var gulp = require('gulp');
var del = require('del');
var typescript = require("gulp-typescript");
var typescriptProject = typescript.createProject("tsconfig.json");
var spawn = require('child_process').spawn;

var instance;

gulp.task('default', ['cleanup', 'compile', 'serve'], function () {
  gulp.watch('src/**/*.ts', ['compile', 'serve']);
});

gulp.task('cleanup', function () {
  return del(['dist/*']);
});

gulp.task('compile', ['cleanup'], function () {
  return typescriptProject.src()
    .pipe(typescriptProject())
    .on('error', function () { console.log('typescript compiler crashed') })
    .js
    .pipe(gulp.dest("dist"));
});

//*
gulp.task('serve', ['compile'], function () {
  if (instance) {
    instance.kill();
  }
  return instance = spawn('node', ['dist/index.js'], { stdio: 'inherit' });
});
//*/