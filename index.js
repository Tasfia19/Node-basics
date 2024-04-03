const fs = require('fs');
const os = require('os');

const systemInfo = {
    cpu: os.cpus(),
    dir: os.homedir(),
    platform: os.platform(),
    process: process
};
fs.writeFileSync("system.json", JSON.stringify(systemInfo));
