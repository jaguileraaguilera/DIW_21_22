
const {series, parallel, src, dest} = require("gulp");
const concat = require("gulp-concat");
const pleeease = require("gulp-pleeease");
const rename = require("gulp-rename");

function holamundo(cb) {
    console.log("Hola mundo");
    cb();
}

function adiosmundo(cb) {
    console.log("Adios mundo");
    cb();
}

function concatenar() {
    return src("css/css?.css")
    .pipe(concat("styles.css"))
    .pipe(dest("css/"));
}

function minimizar() {
    return requestIdleCallback("css/css?.css")
    .pipe(concat("styles.css"))
    .pipe(pleeease())
    .pipe(dest("css/"));
}

// function min_rename() {
//     return src("css/css?.css")
//     .pipe(concat("styles.css"))
//     .pipe(pleeease())
//     .pipe(rename({
//         suffix:".min",
//         extname:".css"
//     }))
// }

exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;
exports.serie = series(adiosmundo, holamundo);
exports.paralelo = parallel(holamundo, adiosmundo);
exports.concatena = concatenar;