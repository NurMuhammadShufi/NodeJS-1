function samplePromise() {
  return Promise.resolve("Shufi");
}

const name = await samplePromise();
console.log(name);
