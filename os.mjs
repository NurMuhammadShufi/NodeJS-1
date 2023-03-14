// mengetahui detail OS yang digunakan
import os from "os";

console.log(os.platform());
console.log(os.arch());
console.log(os.freemem(), "bytes");
console.log(os.totalmem(), "bytes");
console.log(os.homedir());
console.log(os.hostname());
console.table(os.cpus());
