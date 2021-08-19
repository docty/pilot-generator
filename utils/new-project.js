const exec = require('exec-sh');
const fs = require('fs');
const path = require('path');

module.exports = async function(name, basePath) {
    await exec(`mkdir ${name}`);
    setTimeout(() => {
        fs.copyFile(path.resolve(basePath, 'lib/app.js'), `${name}/app.js`, (err) => {});
        fs.copyFile(path.resolve(basePath, 'lib/package.json'), `${name}/package.json`, (err) => {});
        fs.copyFile(path.resolve(basePath, 'lib/.gitignore'), `${name}/.gitignore`, (err) => {});
        fs.copyFile(path.resolve(basePath, 'lib/.sequelizerc'), `${name}/.sequelizerc`, (err) => {});
        fs.mkdir(`${name}/config`, ()=> {});
        fs.copyFile(path.resolve(basePath, 'lib/config/database.js'), `${name}/config/database.js`, (err) => {});
        fs.copyFile(path.resolve(basePath, 'lib/config/routes.js'), `${name}/config/routes.js`, (err) => {});
    }, 1500);
    setTimeout(() => {
        fs.mkdir(`${name}/src`, ()=> {});
        fs.mkdir(`${name}/src/controllers`, ()=> {});
        fs.mkdir(`${name}/src/migrations`, ()=> {});
        fs.mkdir(`${name}/src/models`, ()=> {});
    }, 1500);
}