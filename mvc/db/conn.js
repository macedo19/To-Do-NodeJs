
// Sequelize
const {Sequelize} = require ('sequelize')

// CONEXÃO COM O BANCO (schema, username, password)
const sequelize = new Sequelize('nodemvc', 'root', '', {
    host: 'localhost', //localhost
    dialect: 'mysql' //dialeto
})

try{
    sequelize.authenticate()
    console.log("Conectado no Sequelize com sucesso!!!")
}catch(error){
    console.log(error)
}

// Exportando modulo
module.exports = sequelize