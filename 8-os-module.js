const os = require('os')

const user = os.userInfo();
const uptimeSeconds = os.uptime();

console.log(`The System Uptime is ${uptimeSeconds} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem()
}

console.log(currentOS);

setInterval(() => {
  console.log(getFreeMemoryPercentage());
}, 1000)

function getFreeMemoryPercentage() {
  return `${Math.round(os.freemem / os.totalmem * 10000) / 100}%`;
}