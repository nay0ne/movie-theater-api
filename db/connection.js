// imports
const { Sequelize, DataTypes } = require('sequelize');
// do i need path?
const path = require('path');
//create an instance of the database call it db
const db = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',
    //  should add in path.join(),dirname etc -check with J ????
    storage: './movie_watchlist.sqlite',
    logging: false
})

//export
module.exports = { db, DataTypes }