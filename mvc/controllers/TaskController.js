const Task = require('../models/Task')

//Exportando uma class
module.exports = class TaskController {
    // Metodo para renderizar 
    static creatTask(req,res){
        res.render('tasks/create')
    }

    // Metodo asincrono insert tasks
    static async creatTaskSave(req,res){
        // Dados
        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task) //insere no banco
        
        res.redirect('/tasks') //redireciona para outra view
    }

    //Metodo delete task
    static async removeTask(req,res){
        const id = req.body.id
     
        await Task.destroy({where: {id: id}})
       
        res.redirect('/tasks')
    }

    // Metodo para pegar os dados referentes a tasks escolhida
    static async updateTask(req, res){
        const id = req.params.id

        const task = await Task.findOne({where: {id: id}, raw: true})
        res.render('tasks/edit', {task})
    }

    // Metodo update tasks
    static async updateTaskPost(req, res){
        const id = req.body.id

        // Dados
        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(task, {where: {id: id}}) // Update 

        // Redireciona para tasks
        res.redirect('/tasks')
    }

    //Alterando o done
    static async toggleTaskStatus(req, res){
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false,
        }

        await Task.update(task, {where: {id: id}})

        // Redireciona para tasks
        res.redirect('/tasks')
    }

    static async showTask(req,res){
         // Get all registros
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
       
    }

}