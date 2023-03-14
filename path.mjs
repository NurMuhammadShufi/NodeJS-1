// mengetahui path dari file/folder
import path from "path";

const file = "Users/Shufi/Download";
console.log(path.dirname(file));
console.log(path.basename(file));
console.log(path.extname(file));
