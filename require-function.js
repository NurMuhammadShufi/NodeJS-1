// Require bisa menggunakan file js saja tidak perlu module js nya, artinya hanya perlu ekstensi .js tidak perlu .mjs

const os = require("os");

console.log(os.platform());
console.table(os.cpus());
