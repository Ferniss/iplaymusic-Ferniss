const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const connect = require("gulp-connect");

function html(done){
    gulp.src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(rename(function(path){
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
    done();
}

function watchHtml(done){
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false}, html)
}
gulp.task("dev", function(done){
    watchHtml()
    connect.server({
        livereload: true,
        root: "dist"
    })
    done();
});
