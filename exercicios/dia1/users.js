const users = []

module.exports = (app) => {
  app.get('/users', (_, res) => {
    res.send({
      code: 200,
      meta: {
        pagination: {
          total: users.length,
          pages: 1,
          page: 1,
          limit: undefined,
        }
      },
      data: users
    })
  })

  app.get('/users/:id', (req, res) => {
    const user = users.find((user) => user.id == req.params.id)

    res.send(user)
  })

  app.post('/users', (req, res) => {
    const user = req.body

    user.id = users.length + 1

    users.push(user)

    res.send(user)
  })

  app.put('/users/:id', (req, res) => {
    const { id } = req.params

    const data = req.body

    const user = users.find((user) => user.id == id)

    Object.assign(user, data)

    res.send(user)
  })

  app.patch('/users/:id/activated', (req, res) => {
    const { id } = req.params

    const { isActive } = req.body

    const user = users.find((user) => user.id == id)

    if (isActive) {
      user.status = 'Active'
    } else {
      user.status = 'Inactive'
    }

    res.send(user)
  })

  app.delete('/users/:id', (req, res) => {
    const { id } = req.params

    const userIndex = users.findIndex((user) => user.id == id)

    const user = users[userIndex]

    if (userIndex !== -1) {
      users.splice(userIndex, 1)
    }

    res.send(user)
  })
}
