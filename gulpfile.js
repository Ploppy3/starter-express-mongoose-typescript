// grab our gulp packages
var gulp = require('gulp');
var del = require('del');
var typescript = require("gulp-typescript");
var typescriptProject = typescript.createProject("tsconfig.json");
var spawn = require('child_process').spawn;
var uglify = require('gulp-uglify');
var pump = require('pump');

var instance;

gulp.task('watch', ['cleanup', 'build', 'serve'], function () {
  gulp.watch('src/**/*.ts', ['build', 'serve']);
});

gulp.task('cleanup', function () {
  return del(['dist/*']);
});

gulp.task('build', ['cleanup'], function () {
  return typescriptProject.src()
    .pipe(typescriptProject())
    .on('error', function () { console.log('typescript compiler crashed') })
    .js
    .pipe(gulp.dest("dist"));
});

gulp.task('serve', ['build'], function () {
  if (instance) {
    instance.kill();
  }
  return instance = spawn('node', ['dist/index.js'], { stdio: 'inherit' });
});

gulp.task('compress', ['cleanup', 'build'], function (cb) {
  return pump([
    gulp.src('dist/**/*.js'),
    uglify(),
    gulp.dest('dist')
  ],
    cb
  );
});