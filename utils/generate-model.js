const exec = require('exec-sh');

module.exports = async function(name) {
    await exec(`sequelize model:generate --name=${name} --attributes=referenceId:string`);
}