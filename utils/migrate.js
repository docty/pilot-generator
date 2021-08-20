const exec = require('exec-sh')
module.exports = function() {
    exec(`sequelize db:migrate`);
}