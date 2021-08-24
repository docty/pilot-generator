const newProject = require('./new-project');
const generateModel = require('./generate-model');
const generateController = require('./generate-controller');
const generateMiddleware = require('./generate-middleware');
const migrate = require('./migrate');


module.exports = function(args, basePath) {
    const command = args[0];
    switch (command) {
        case 'new':
            newProject(args[1], basePath)
            break;
        case 'model':
            generateModel(args[1]);
            break;
        case 'controller':
            generateController(args[1]);
            break;
		case 'middleware':
            generateMiddleware(args[1]);
            break;
        case 'migrate':
            migrate();
            break;
        default:
            console.log('Invalid Command')
            break;
    }
}