const { error } = require('console');
const fs = require('fs');
const commandLineArgs = process.argv.slice(2);

//console.log(commandLineArgs);
fs.readdir(commandLineArgs[1],(error,files) => {
    if(error){
        console.error('Error :',error)
    }

    var basePath = "C:\\Users\\91987\\Pictures\\";
    files.forEach(file => {
        const parts = file.split('.');
        if(parts[1] === 'JPG' || parts[1] === 'jpg' || parts[1] === 'PNG' || parts[1] === 'png'){
            if(fs.existsSync(basePath+"PERSONAL_PIC")){
                fs.readFile(basePath+file, (readErr, data) => {
                    if (readErr) {
                      console.error('Error reading source file:', readErr);
                      return;
                    }
                  
                    // Write the content to the destination path
                    fs.writeFile(basePath+"PERSONAL_PIC//"+file, data, (writeErr) => {
                      if (writeErr) {
                        console.error('Error writing to destination file:', writeErr);
                        return;
                      }
                  
                
                      });
                    });
            }
            else{
                fs.mkdir(basePath+"PERSONAL_PIC", (err) => {
                    if (err) {
                      console.error(err);
                      return;
                    }
                    console.log('Directory created.');
                });
            }
        }
    })
})

