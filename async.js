function samplePromise() {
  return Promise.resolve("Shufi");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
