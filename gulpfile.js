"use strict";

const gulp = require("gulp");
const gutil = require("gulp-util");
//const webpack = require("webpack");

const webpack = require("webpack-stream");
const browserSync = require("browser-sync").create();
const del = require("del");
const pump = require("pump");
const imagemin = require("imagemin");
const eslint = require("gulp-eslint");

gulp.task("lint", () => {
  return gulp.src(["**/*.js", "!node_modules/**", "!dist/bundle.js", "!bower_components/**"])
    .pipe(eslint({
      "rules": {
        "quotes": [1, "double"],
        "semi": [1, "always"]
      },
      "extends": "eslint:recommended",
      "parserOptions": {
        "ecmaVersion": 6
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});


gulp.task("webpack", ["browserSync"], () => {
  return gulp.src("./src/*.jsx")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./dist/"));  
});

// gulp.task("webpack", (done) => {
//   webpack(require("./webpack.config.js")
//   , (err, stats) => {
//     if(err){
//       throw new gutil.PluginError("webpack", err);
//     }gutil.log("[webpack]", stats.toString({
//     }));
//     done();
//   });
// });

gulp.task("webpack-dev-server", (done) => {
  new WebpackDevServer(compiler);
});

gulp.task("clean", () => {
    return del([
        "public/views/bin/*"
    ]);
});

gulp.task("browserSync", () => {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    }
  });
});


gulp.task("watch", ["lint", "clean", "webpack"], () => {  
  gulp.watch("./src/**/*.css").on("change", browserSync.reload);
  gulp.watch("./dist/*.js").on("change", browserSync.reload);
  gulp.watch("./src/**/*.jsx").on("change", browserSync.reload);  
});

gulp.task("default", ["watch"]);
