// Digunakan untuk mengekstrak URL
import { URL } from "url";

const instagramURL = new URL("https://www.instagram.com/");

console.log(instagramURL);
console.log(instagramURL.toString());
console.log(instagramURL.href);
console.log(instagramURL.protocol);
console.log(instagramURL.host);
console.log(instagramURL.path);
console.log(instagramURL.searchParams);
