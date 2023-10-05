const fs = require('fs');
const path = require('path');

const logsDirectory = path.join(__dirname, 'Logs');

const removeLogFiles = () => {
  try {
    if (fs.existsSync(logsDirectory)) {
      const files = fs.readdirSync(logsDirectory);
      
      console.log('Files to delete:');
      for (const file of files) {
        console.log(file);
        fs.unlinkSync(path.join(logsDirectory, file)); 
      }
      
      fs.rmdirSync(logsDirectory);
      console.log('Logs directory removed.');
    } else {
      console.log('Logs directory does not exist.');
    }
  } catch (error) {
    console.error(error);
  }
};

removeLogFiles();
