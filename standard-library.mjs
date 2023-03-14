// <- Error karena bukan JS module file, ekstensi file masih .js ->

import { platform, cpus } from "os";

console.log(platform());
console.table(cpus());

// <- Succes karena JS module file, ekstensi file diubah jadi.mjs ->
