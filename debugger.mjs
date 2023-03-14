// Jalankan file tersebut dengan command node inspect namafile.mjs/js
/*
    command debugging yg bisa digunakan dalam melakukan debugging :
    1. cont, c : Continue execution
    2. next, n : Step next
    3. step, s : Step in
    4. out, o : Step out
    5. pause : Pause running code 
**/
function sayHello(name) {
  debugger;
  return `Hello ${name}`;
}

const name = "Shufi";
console.log(sayHello(name));
