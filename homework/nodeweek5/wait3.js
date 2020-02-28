let myWaitPromise = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve("Happy Coding");
  }, 3000);
});

myWaitPromise.then(happyCoding => {
  console.log("Happy Coding!");
});
