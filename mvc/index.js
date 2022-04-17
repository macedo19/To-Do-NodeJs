// Iniciando aplicação
const express = require('express')
const exphbs = require('express-handlebars')

// Express
const app = express()

// Conexão com o banco
const conn = require('./db/conn')

const Taks = require('./models/Task')


// Importando rotas
const taskRoutes = require('./routes/taskRoutes')

// Handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

// Leitura do body para json
app.use(
    express.urlencoded({
        extended: true 
    })
)

app.use(express.json())

// CSS
app.use(express.static('public'))

// Rota tasks
app.use('/tasks', taskRoutes)

// Sincronizando o banco e criando as tabelas
conn.sync().then(() => {
    // Iniciando serviço
    app.listen(3000)
}).catch((err) => console.log(err))
