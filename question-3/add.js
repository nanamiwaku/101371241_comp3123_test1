const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const createLogFiles = () => {
  try {
    if (!fs.existsSync(logsDirectory)) {
      fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);

    for (let i = 1; i <= 10; i++) {
      const fileName = `log${i}.txt`;
      const content = `This is log file ${i}.`;
      fs.writeFileSync(fileName, content);
      console.log(`Created ${fileName}`);
    }

    console.log('Log files created.');
  } catch (error) {
    console.error(error);
  }
};

createLogFiles();
