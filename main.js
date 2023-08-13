const help = require('./commands/help')
const organize = require('./commands/organize')
const commandLineArgs = process.argv.slice(2);

const command = commandLineArgs[0];
switch(command){
  case "help":
        help.helpfn();
        break;
  case "organize":
        organize.organizefn(commandLineArgs[1]);
        break;
  default:
        console.log("Please 🙏 Input Right command");
        break;
}

