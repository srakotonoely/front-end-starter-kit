import gulp from 'gulp';
import sass from 'gulp-sass';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';
import pug from 'gulp-pug';
import imagemin from 'gulp-imagemin'
import newer from 'gulp-newer'
import nodemon from 'gulp-nodemon'
import sourcemaps from 'gulp-sourcemaps';
import del from 'del';
import browserSync from 'browser-sync';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import config from './config/gulp';

const reload = browserSync.reload;

const clean = () => del(['assets']);

function stylesTask(done) {
  return gulp.src(config.paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCSS())
    // pass in options to the stream
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.paths.styles.dest))
    .pipe(reload({
      stream: true
    }))
    .on('end', () => {
      done();
    });
}

function scriptsTask() {

  watchify.args.debug = true;

  var bundler;

  const getBundler = () => {
    if (!bundler) {
      bundler = watchify(browserify(config.paths.scripts.src, watchify.args));
    }
    return bundler;
  };

  const rebundle = () => {
    return getBundler()
      .transform(babelify)
      .bundle()
      .on('error', function (err) {
        console.log('Error: ' + err.message);
      })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(config.paths.scripts.dest))
      .pipe(reload({
        stream: true
      }));
  }

  getBundler().on('update', rebundle);

  return rebundle();

}

function htmlTask(done) {
  return gulp.src(config.paths.pug.src)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(config.paths.pug.dest))
    .pipe(reload({
      stream: true
    }))
    .on('end', () => {
      done();
    });
}

function imagesTask(done) {
  return gulp.src(config.paths.images.src, {
      since: gulp.lastRun(images)
    })
    .pipe(newer(config.paths.images.dest)) // pass through newer images only
    .pipe(imagemin({
      optimizationLevel: 5
    }))
    .pipe(gulp.dest(config.paths.images.dest))
    .pipe(reload({
      stream: true
    }))
    .on('end', () => {
      done();
    });
}

function fontsTask(done) {
  return gulp.src(config.paths.fonts.src, {
      since: gulp.lastRun(fonts)
    })
    .pipe(newer(config.paths.fonts.dest)) // pass through newer fonts only
    .pipe(gulp.dest(config.paths.fonts.dest))
    .pipe(reload({
      stream: true
    }))
    .on('end', () => {
      done();
    });
}

function copyStaticsTask(done) {
  return gulp.src(config.paths.statics.src, {
      since: gulp.lastRun(statics)
    })
    .pipe(newer(config.paths.statics.dest)) // pass through newer statics only
    .pipe(gulp.dest(config.paths.statics.dest))
    .pipe(reload({
      stream: true
    }))
    .on('end', () => {
      done();
    });
}

function watchTask(done) {
  gulp.watch(config.paths.scripts.src, gulp.parallel(scriptsTask));
  gulp.watch(config.paths.styles.all, gulp.parallel(stylesTask));
  gulp.watch(config.paths.pug.all, gulp.parallel(htmlTask));
  gulp.watch(config.paths.images.src, gulp.parallel(imagesTask));
  done();
}

function serveTask(cb) {
  let started = false;
  return nodemon(config.plugins.nodemon)
    .on('start', function () {
      if (!started) {
        started = true;
        cb();
      }
    })
    .on('crash', () => {
      console.log('nodemon.crash');
    })
    .on('restart', () => {
      console.log('nodemon.restart ');
    })
    .once('quit', () => {
      // handle ctrl+c without a big weep
      process.exit();
    });
}

function browserSyncTask(done) {
  browserSync.init(null, config.plugins.browserSync)
}


// ########################################

export const styles = gulp.series(clean, gulp.parallel(stylesTask), (done) => {
  done()
});

export const scripts = gulp.series(clean, gulp.parallel(scriptsTask), (done) => {
  done()
});

export const html = gulp.series(clean, gulp.parallel(htmlTask), (done) => {
  done()
});

export const images = gulp.series(clean, gulp.parallel(imagesTask), (done) => {
  done()
});

export const fonts = gulp.series(clean, gulp.parallel(fontsTask), (done) => {
  done()
});

export const statics = gulp.series(clean, gulp.parallel(copyStaticsTask), (done) => {
  done()
});

export const build = gulp.series(clean, gulp.parallel(htmlTask, stylesTask, scriptsTask, imagesTask, fontsTask, copyStaticsTask), (done) => {
  done()
});

export const serve = gulp.series(gulp.parallel(browserSyncTask, serveTask, watchTask), (done) => {
  done()
});
