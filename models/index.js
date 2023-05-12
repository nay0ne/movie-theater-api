const Show = require('./Show')
const User = require('./User')

Show.belongsToMany(User, {through: "show_user"});
User.belongsToMany(Show, {through: "show_user"});

module.exports = {
    Show, 
    User
}
