const fs = require('fs');
const path = require('path');

module.exports = function(name){
    const content = `module.exports = function(req, res){

}`
    let basePath = 'src/controllers/';
    const getIndex = name.indexOf('/');

    if (getIndex == -1){
        const fileName = basePath+name+'.js';
        fs.writeFile(fileName, content, function() {});
        return
    }
    const defaultArray = name.split('/');
    const lastName = defaultArray.pop();
    
    defaultArray.forEach(element => {
        basePath = basePath+element+'/'
        fs.mkdir(basePath, () => {});
    });
    
    const fileName = basePath+lastName+'.js';
    fs.writeFile(fileName, content, function() {});
}