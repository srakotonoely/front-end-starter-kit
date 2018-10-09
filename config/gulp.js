var paths = {
  dist_files: 'dist/**/*.*',
  'server': {
    LOCAL: 'http://localhost:3000'
  },
  styles: {
    src: 'app/styles/main.scss',
    all: './app/styles/**',
    dest: './dist/css/'
  },
  scripts: {
    src: 'app/scripts/main.js',
    all: './app/scripts/**',
    dest: './dist/js/'
  },
  pug: {
    all: './app/views/**',
    src: [
      './app/views/_pages/*.pug',
    ],
    dest: './dist/'
  },
  images: {
    src: 'app/images/**/*.{jpg,jpeg,png}',
    dest: './dist/images/'
  },
  statics: {
    src: 'app/statics/*',
    dest: './dist/'
  },
  fonts: {
    src: 'app/fonts/**/*',
    dest: './dist/fonts/'
  }
};

module.exports = {
  paths: paths,
  plugins: {
    browserSync: {
      proxy: paths.server.LOCAL,
      port: 3002,
      open: true,
      logFileChanges: true,
      logConnections: false,
      injectChanges: true,
      timestamps: false,
      ghostMode: {
        clicks: true,
        forms: true,
        scroll: false
      }
    },
    nodemon: {
      script: './index.js',
      ext: 'js',
      ignore: [
        'config/',
        './dist/**/*',
        'node_modules/'
      ],
      watch: [
        'gulpfile.babel.js',
        'index.js'
      ],
    }
  }
};
