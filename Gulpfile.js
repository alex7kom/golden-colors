var gulp = require('gulp');
var umd = require('gulp-umd');
var rename = require('gulp-rename');
var clone = require('gulp-clone');
var uglify = require('gulp-uglify');
var header = require('gulp-header');
var markdown = require('gulp-markdown');
var concatExtra = require('gulp-concat-extra');

var pkg = require('./package.json');

var banner = [
  '/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * @author <%= pkg.author %>',
  ' * @link <%= pkg.homepage %>',
  ' * @license <%= pkg.license %>',
  ' */',
  ''
].join('\n');

var uglifyParams = {
  preserveComments: 'license'
};

gulp.task('default', function () {
  var script = gulp.src('golden-colors.js');

  script
    .pipe(clone())
    .pipe(header(banner, { pkg: pkg } ))
    .pipe(gulp.dest('dist'))
    .pipe(uglify(uglifyParams))
    .pipe(rename('golden-colors.min.js'))
    .pipe(gulp.dest('dist'));

  script
    .pipe(clone())
    .pipe(umd({
      exports: function (file) {
        return 'goldenColors';
      },
      namespace: function (file) {
        return 'goldenColors';
      }
    }))
    .pipe(header(banner, { pkg: pkg } ))
    .pipe(rename('golden-colors-amd.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify(uglifyParams))
    .pipe(rename('golden-colors-amd.min.js'))
    .pipe(gulp.dest('dist'));

  gulp.src('README.md')
    .pipe(markdown())
    .pipe(rename('index.html'))
    .pipe(concatExtra({
      'index.html': {
        prepend: [
          '_html/header.html'
        ],
        append: [
          '_html/footer.html'
        ]
      }
    }))
    .pipe(gulp.dest('.'));
});
