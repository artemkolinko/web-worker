console.log('worker.js start');

// Receive message from main file
self.onmessage = (e) => {
  let count = e.data;

  const inervalId = setInterval(() => {
    // Send message back to main.js
    postMessage(`Hello ${count}`);
    count++;
  }, 1000);

  setTimeout(() => {
    clearInterval(inervalId);
  }, 10000);
};

console.log('worker.js finish');
