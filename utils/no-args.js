const chalk = require('chalk');

module.exports = function() {
    const usage = chalk.green("\n Usage: pilot-generator [command]");
    const options = `\n\n Options: 
    \n  \t -v, --version  output the version number
    \t -h, --help     output usage information`;

    const commands = "\n\n Commands:"+ 
    "\n  \t new [name]  Create a new project";
    
    console.log(usage);
    console.log(options);
    console.log(commands);
}