var paths = {
  dist_files: 'dist/**/*.*',
  'server': {
    LOCAL: 'http://localhost:3000'
  },
  styles: {
    src: 'app/styles/main.scss',
    all: './app/styles/**',
    dest: './dist/styles/'
  },
  scripts: {
    src: 'app/scripts/main.js',
    dest: './dist/scripts/'
  },
  pug: {
    all: './app/views/**',
    src: [
      './app/views/**/*.pug',
      '!./app/views/**/_*.pug',
      '!./app/views/_*/**/*.pug',
      '!./app/views/**/**/_*/*.pug'
    ],
    dest: './dist/html/'
  },
  images: {
    src: 'app/images/**/*.{jpg,jpeg,png}',
    dest: './dist/images/'
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
