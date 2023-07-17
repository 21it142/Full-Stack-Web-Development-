const os = require('os');

function outputFunction() {
  const totalMemory = os.totalmem();
  const freeMemory = os.freemem();
  const percentageFreeMemory = (freeMemory / totalMemory) * 100;

  console.log('Total Memory:', displayBytes(totalMemory));
  console.log('Free Memory:', displayBytes(freeMemory));
  console.log('Percentage of Free Memory:', percentageFreeMemory.toFixed(2) + '%');
}

function displayBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const k = 1024;
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + units[i];
}

outputFunction();
