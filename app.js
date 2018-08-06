function sleep(waitTime) {
  const sleepPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Sucess');
    }, waitTime);
  });

  sleepPromise.then(successMessage => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log('Yay! ' + successMessage);
  });

  return sleepPromise;
}

async function init() {
  console.log('I should log immediately');
  await sleep(1000);
  console.log('I should log after a second');
}

init();
