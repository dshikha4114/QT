const os = require('os');
const cpuarchitecture = os.arch();
console.log(cpuarchitecture); // Example output: 'x64'

console.log("-------------------------------------");
const cpuplatform = os.platform();
console.log(cpuplatform);

console.log("-------------------------------------");
const ostype = os.type();
console.log(ostype);

console.log("-------------------------------------");
const hostname = os.hostname();
console.log(hostname);


console.log("-------------------------------------");
const osVersion = os.release();
console.log(osVersion);

console.log("-------------------------------------");
const ostotalmemory = os.totalmem();
console.log(ostotalmemory);

console.log("-------------------------------------");
const osfreemem = os.freemem();
console.log(osfreemem);

console.log("-------------------------------------");
const oscpus = os.cpus();
console.log(oscpus);

console.log("-------------------------------------");
const osnetworkInterfaces = os.networkInterfaces();
console.log(osnetworkInterfaces);

console.log("-------------------------------------");
const cpuuptime = os.uptime();
console.log(cpuuptime);
