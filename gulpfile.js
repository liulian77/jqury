// 引入模块
const
    gulp = require("gulp"),
    babel = require("gulp-babel"),
    uglify = require("gulp-uglify"),
    htmlmin = require("gulp-htmlmin"),
    sass = require("gulp-sass"),
    connect = require("gulp-connect");

// 定制任务：压缩JS
gulp.task("js", () => {
    gulp.src("src/js/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
});

// 编译*.scss文件
gulp.task("sass", () => {
    gulp.src("src/sass/**/*.scss")
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
});

// 压缩HTML文件
gulp.task("html", () => {
    gulp.src("src/**/*.html")
        .pipe(htmlmin({ collapseWhitespace: true, minifyJS: true }))
        .pipe(gulp.dest("dist/"))
        .pipe(connect.reload());
});

// 将 src 下的 images、lib、css 复制到 dist 目录下
gulp.task("copy-images", () => {
    gulp.src("src/images/**/*.*")
        .pipe(gulp.dest("dist/images"));
});
gulp.task("copy-lib", () => {
    gulp.src("src/libs/**/*.*")
        .pipe(gulp.dest("dist/libs"));
});
gulp.task("copy-css", () => {
    gulp.src("src/css/**/*.*")
        .pipe(gulp.dest("dist/css"));
});

gulp.task("copy-mock", () => {
    gulp.src("src/mock/**/*.*")
        .pipe(gulp.dest("dist/mock"));
});


gulp.task("copy", ["copy-images", "copy-lib", "copy-css", "copy-mock"]);

// 启动 webserver
gulp.task('server', function() {
    connect.server({
        root: "dist",
        port: 8080,
        livereload: true
    });
});

// 监视任务
gulp.task("watch", () => {
    // 监听 sass 文件夹下的 *.scss文件的修改，当有修改文件，则执行 "sass" 任务
    gulp.watch("src/sass/**/*.scss", ["sass"]);
    // 监听html文件修改
    gulp.watch("src/**/*.html", ["html"]);
    // 监听js修改
    gulp.watch("src/js/**/*.js", ["js"]);
});

// 默认任务
gulp.task("default", ["sass", "js", "html", "copy", "server", "watch"]);