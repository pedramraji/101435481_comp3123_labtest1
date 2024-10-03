const fs = require('fs');
const path = require('path');

// Current Directory path in Q3 folder
const logsDir = path.join(__dirname, 'Logs');

// Create Log files
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created');
}

process.chdir(logsDir);
for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.log`;
    fs.writeFileSync(fileName, `This is log file ${i} created on ${new Date()} ${new Date().toLocaleTimeString()}`);
}


// Removing the Log files generated
if (fs.existsSync(logsDir)) {
    fs.readdirSync(logsDir).forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`delete files...${file}`);
        fs.unlinkSync(filePath);
    });
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed as well');
}


