if (typeof Worker !== 'undefined') {
  // Yes! Web worker support!
  console.log('main.js start');

  // Create worker
  const myWorker = new Worker('worker.js');

  // Send message to worker
  myWorker.postMessage(42);

  // Receive message from worker
  myWorker.onmessage = function (e) {
    console.log(e.data);
  };

  // if error
  myWorker.onerror = function (e) {
    console.log(e.data);
  };

  console.log('main.js finish');
} else {
  const msg = document.createElement('p');
  msg.textContent = 'Sorry! No Web Worker support...';
  msg.style.color = 'red';

  document.body.appendChild(msg);
}
