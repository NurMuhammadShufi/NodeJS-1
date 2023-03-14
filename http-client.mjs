/* 
    protokol dalam node js dibagi menjadi dua, Http & Https
 */

import https from "https";

const endpoint = "";
const request = https.request(
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.log(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Who",
  lastName: "Am i",
});

request.write(body);
request.end();
