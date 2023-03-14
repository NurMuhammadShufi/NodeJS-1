/* 
    Buffer pada Node.js sering digunakan dalam situasi di mana data biner perlu dikirim atau diterima melalui jaringan atau disimpan di dalam file.
**/

// buffer juga bisa dikonversi ke string
// buffer juga bisa mengkonversi encoding seperti utf-8, ascii, base64, hex

const buffer = Buffer.from("Nur Muhammad Shufi", "utf-8");

console.log(buffer);
console.log(buffer.toString("hex"));

const bufferHex = Buffer.from("4e7572204d7568616d6d6164205368756669", "hex");
console.log(bufferHex);
console.log(bufferHex.toString("utf-8"));
