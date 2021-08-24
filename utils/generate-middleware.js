const fs = require('fs');
const path = require('path');

module.exports = function(name){
    const content = `module.exports = function(req, res){

}`
    let basePath = path.resolve('src/middlewares/');
    const getIndex = name.indexOf('/');
	
	if (!fs.existsSync(basePath)) {
		fs.mkdirSync(path.resolve(basePath))
	}
	
    if (getIndex == -1){
        const fileName = path.join(basePath, `${name}.js`);
        fs.writeFile(path.resolve(fileName), content, function() {});
		console.log(path.resolve(fileName))
        return
    }
	
    const defaultArray = name.split('/');
    const lastName = defaultArray.pop();
    
    defaultArray.forEach(element => {
        basePath = path.join(basePath, element)
        fs.mkdirSync(basePath);
		console.log(basePath)
    });
    
    const fileName = path.join(basePath, `${lastName}.js`);
    fs.writeFile(fileName, content, function() {});
}