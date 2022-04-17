// Require Sequelize
const {DataType, DataTypes} = require('sequelize')

const db = require('../db/conn')

// Preparando tabela a ser criada no banco -> Primeiro parametro é o nome da tabela e o segundo são suas colunas
const Taks = db.define('Task', {
    title:{
        type:DataTypes.STRING, //Tipo
        required: true, // Não aceita campo vazio
    },
    description: {
        type:DataTypes.STRING, //Tipo
        required: true, // Não aceita campo vazio
    },
    done: {
        type:DataTypes.BOOLEAN, //Tipo
        required: true, // Não aceita campo vazio
    },
})

module.exports = Taks