const fs = require('fs')
function transfer(sourceFilePath,destinationFilePath){
        //console.log(sourceFilePath+"  "+destinationFilePath)
        fs.readFile(sourceFilePath, (readErr, data) => {
            if (readErr) {
                console.error('Error reading source file:', readErr);
                return;
            }

            // Write the content to the destination path
            fs.writeFile(destinationFilePath, data, (writeErr) => {
            if (writeErr) {
                console.error('Error writing to destination file:', writeErr);
                return;
            }
        })
    })
}
module.exports = {
    transferfn : transfer
}