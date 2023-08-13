const { error } = require('console');
const fs = require('fs');
const path = require('path');
const utility = require('../Utility/Utility.js')
const transfer = require('../Utility/TransferUtiliy.js')

function organize(sourceFilePath){
    fs.readdir(sourceFilePath,(error,files) => {
        if(error){
            console.error('Error :',error)
        }
    
        files.forEach(file => {
            const extension = file.split('.');
            const extensionFileName = utility.utilityfn(extension[1])
            if(extensionFileName !== undefined){
                const destinationFilePath = path.join(sourceFilePath, extensionFileName);
                if(fs.existsSync(destinationFilePath)){
                    transfer.transferfn(path.join(sourceFilePath,file),path.join(destinationFilePath,file))
                }else{
                    fs.mkdir(destinationFilePath, (err) => {
                        if (err) {
                        console.error(err);
                        return;
                        }
                        console.log('Directory created.');
                    });
                    transfer.transferfn(path.join(sourceFilePath,file),path.join(destinationFilePath,file))
                }
            }             
        })
    })
}


module.exports = {
    organizefn:organize
}