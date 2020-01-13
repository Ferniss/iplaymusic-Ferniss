const gulp = require("gulp");
const ejs = require("gulp-ejs");

function html(done){
    gulp.src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(gulp.dest("./dist"))
}

function watchHtml(done){

}
gulp.task("dev", html)