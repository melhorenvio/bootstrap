var gulp        = require('gulp'),
    stylus      = require('gulp-stylus'),
    jeet        = require('jeet'),
    koutoSwiss  = require('kouto-swiss'),
    rupture     = require('rupture'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    changed     = require('gulp-changed'),
    runSequence = require('run-sequence'),
    plumber     = require('gulp-plumber'),
    svgSymbols  = require('gulp-svg-symbols'),
    fileinclude = require('gulp-file-include'),
    spritesmith = require('gulp.spritesmith');

var path = {
  js: ['dev/assets/js/**/*.js', '!dev/assets/js/**/*.min.js'],
  stylus: ['dev/assets/stylus/**/*.styl'],
  stylusLib: ['lib/me-bootstrap/layout/**/*.styl'],
  css: ['dev/assets/css/**/*.css', '!dev/assets/css/**/*.min.css'],
  img: ['dev/assets/img/**/*'],
  html: ['dev/pages/**/*.html', '!dev/pages/partials/*.html']
};

gulp.task('fileinclude', function() {
  gulp.src(path.html)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./dev'))
    .pipe(reload({stream:true}));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('dev/assets/img/partials/*.png')
  .pipe(spritesmith({
    imgPath: 'dev/assets/img/sprite.png',
    imgName: 'sprite.png',
    cssName: 'sprite.styl',
    cssFormat: 'stylus',
    algorithm: 'binary-tree'
  }));
  spriteData.img.pipe(gulp.dest('dev/assets/img/'));
  spriteData.css.pipe(gulp.dest('dev/assets/stylus/'));
});

gulp.task('spritesvg', function () {
  return gulp.src('dev/assets/img/svg/*.svg')
    .pipe(svgSymbols({
      templates: ['default-svg']
    }))
    .pipe(gulp.dest('dev/assets/img'));
});

gulp.task('stylus:lib', function () {
  return gulp.src(path.stylusLib)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log([
          'Errrroou!',
          '    Erro: ' + err.name + '',
          '  plugin: ' + err.plugin + '',
          'Mensagem: ' + err.message + '',
        ].join('\n'));
        this.emit('end');
      }
    }))
    .pipe(stylus({
      compress: true,
      use: [jeet(), rupture(), koutoSwiss()]
    }))
    .pipe(gulp.dest('dev/assets/css/'))
    .pipe(reload({stream:true}));
});

gulp.task('stylus', function () {
  return gulp.src(path.stylus)
    .pipe(plumber({
      errorHandler: function (err) {
        console.log([
          'Errrroou!',
          '    Erro: ' + err.name + '',
          '  plugin: ' + err.plugin + '',
          'Mensagem: ' + err.message + '',
        ].join('\n'));
        this.emit('end');
      }
    }))
    .pipe(stylus({
      compress: true,
      use: [jeet(), rupture(), koutoSwiss()]
    }))
    .pipe(gulp.dest('dev/assets/css/dev/'))
    .pipe(reload({stream:true}));
});

gulp.task('sync', function() {
  browserSync({
    server: {
      baseDir: "./dev"
    }
  });
});

gulp.task('watch', function () {
  gulp.watch(path.stylus, ['stylus']);
  gulp.watch(path.stylusLib, ['stylus:lib']);
  gulp.watch('dev/pages/**/*.html', ['fileinclude']);
});

gulp.task('js:build', function () {
  return gulp.src(path.js)
    .pipe(uglify({outSourceMap: true}))
    .pipe(plumber({
      errorHandler: function (err) {
        console.log([
          'Errrroou!',
          '    Erro: ' + err.name + '',
          '  plugin: ' + err.plugin + '',
          'Mensagem: ' + err.message + '',
        ].join('\n'));
        this.emit('end');
      }
    }))
    .pipe(gulp.dest('build/assets/js/'));
});

gulp.task('move:build', function () {
  return gulp.src([
    'dev/**',
    '!dev/assets/stylus',
    '!dev/assets/stylus/**/*.styl',
    '!dev/assets/js',
    '!dev/assets/js/**/*.js'
  ])
  .pipe(gulp.dest('build/'));
});

gulp.task('default', ['stylus', 'stylus:lib', 'fileinclude', 'spritesvg', 'watch', 'sync']);
gulp.task('build', function () {
  runSequence('stylus', 'js:build', 'move:build');
});
