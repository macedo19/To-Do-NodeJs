const express = require('express')
const router = express.Router()

// Require Controller
const TaskController = require('../controllers/TaskController')

// Criando rotas
// Quando pegar a rota /add será redirecionado a controller Task a qual irá renderizer um handlebars
router.get('/add', TaskController.creatTask) //rendirzar view
router.post('/add', TaskController.creatTaskSave) //rota de post que ira salvar os dados no banco
router.post('/remove', TaskController.removeTask) //rota de post que ira remover por id
router.get('/edit/:id', TaskController.updateTask) //get dados detalhados
router.post('/edit', TaskController.updateTaskPost) //atualizar dados com router post
router.post('/updatestatus', TaskController.toggleTaskStatus) //atualizar dados com router post
router.get('/', TaskController.showTask)

// Exportando router
module.exports = router