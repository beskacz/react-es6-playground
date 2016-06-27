import gulp from 'gulp';
import sass from 'gulp-sass';
import webpack from 'webpack';
import browserSyncLib  from 'browser-sync';
import runSequence from 'run-sequence';
import nodemon from 'gulp-nodemon';
import config from './src/js/config.js';
import gutil from 'gulp-util';

const browserSync = browserSyncLib.create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./web/"
        }
    });
});

gulp.task('start-server', function() {
  nodemon({
    script: 'server.js',
    ignore: ['*.*'],
    env: { PORT: config.nodeServerPort }
  });
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack({
      entry: './src/js/index.js',
      output: {
        path: './web/js',
        filename: 'app.bundle.js',
       },
       module: {
         loaders: [{
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'react']
          }
        }]
       },
       resolve: {
         alias: {
           jquery: "jquery/src/jquery",
           components: __dirname + '/src/js/components/'
         }
       },
       plugins: [
         new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
         })
       ]
    }, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        // gutil.log("[webpack]", stats.toString({
        //     // output options
        // }));
        callback();
    });
});

gulp.task('watch', function() {
      gulp.watch("src/js/**/*.js", ['webpack']);
      gulp.watch([
        "web/**/*",
        "!web/css/**/*"
      ], function(){
        browserSync.reload();
      });
});

gulp.task('init-dev', function() {
    runSequence(
      'webpack',
      'browser-sync',
      'watch'
    );
});

gulp.task('build', ['webpack']);

gulp.task('serve', function() {
    runSequence(
      'start-server',
      'init-dev'
    )
});
gulp.task('default', ['init-dev']);
