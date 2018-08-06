function sleep(waitTime) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, waitTime);
  });
}

async function init() {
  console.log('I should log immediately');
  await sleep(1000);
  console.log('I should log after a second');
}

init();
