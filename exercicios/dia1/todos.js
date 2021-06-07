const todos = []

module.exports = (app) => {
  app.get('/todos', (_, res) => {
    res.send({
      code: 200,
      meta: {
        pagination: {
          total: todos.length,
          pages: 0,
          page: 0,
          limit: 0,
        }
      },
      data: todos
    })
  })

  app.get('/todos/:id', (req, res) => {
    const { id } = req.params

    res.send(todos.find((todo) => todo.id == id))
  })
  
  app.post('/todos', (req, res) => {
    const todo = req.body
    
    todo.id = todos.length + 1
    
    todos.push(todo)
    
    res.send(todo)
  })
}
