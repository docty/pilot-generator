const newProject = require('./new-project')
module.exports = function(args, basePath) {
    const command = args[0];
    switch (command) {
        case 'new':
            newProject(args[1], basePath)
            break;
    
        default:
            console.log('Null')
            break;
    }
}