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

const {series, parallel} = require("gulp");

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
