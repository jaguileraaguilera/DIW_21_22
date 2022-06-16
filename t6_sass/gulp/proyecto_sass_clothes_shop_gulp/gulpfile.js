// require("gulp");

// function holamundo(cb) {
//     console.log("Hola mundo");
//     cb();
// }

// function adiosmundo(cb) {
//     console.log("Adios mundo");
//     cb();
// }

// exports.holamundo = holamundo;
// exports.adiosmundo = adiosmundo;
// exports.default = holamundo;


// SEGUNDO EJEMPLO

const rename = require("gulp-rename");
const {series, parallel, src, dest} = require("gulp");
const sass = require("gulp-dart-sass");
const processhtml = require("gulp-processhtml");
const gult

function compilar() {
    return src("scss/main.scss")
    .pipe(sass())
    .pipe("up/css/");
}

var doc_options = {
    dest : 'docs'
}


function generar_docs() {
    return src("scss/main.scss")
    .pipe(sassdoc(doc_options));
}

// function html() {

// }

function holamundo(cb) {
    console.log("Hola mundo");
    cb();
}

function adiosmundo(cb) {
    console.log("Adios mundo");
    cb();
}

exports.holamundo = holamundo;
exports.adiosmundo = adiosmundo;
exports.default = holamundo;
exports.serie = series(adiosmundo, holamundo);
exports.paralelo = parallel(holamundo, adiosmundo);
