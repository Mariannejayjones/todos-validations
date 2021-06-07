const todos = []

const { validate, validations } = require('indicative/validator')
const { response } = require('express')
const { sanitize } = require('indicative/sanitizer')

module.exports = (app, db) => {
  app.get("/todos", (req, res) => {
    db.query("SELECT * FROM todos", (error, results, fields) => {
      if (error) {
        throw error;
      }

      res.send({
        code: 200,
        meta: {
          pagination: {
            total: results.length,
            pages: 1,
            page: 1,
            limit: undefined,
          },
        },
        data: results,
      });
    });
  });


  app.get("/todos/:id", (req, res) => {
    const { id } = req.params;

    // LIMIT - to gather one result in this case -
    db.query(
      "SELECT * FROM todos WHERE id = ? LIMIT 1",
      [id],
      (error, results, _) => {
        if (error) {
          throw error;
        }
        res.send(results[0]); // pega no primeiro elemento e retorna
      }
    );
  });

  app.get('/users/:id/todos', (req, res) => { // para ir buscar todos os "todos" para cada id de cada users
    const { id } = req.params;

    db.query('SELECT * FROM todos WHERE user_id = ?', [id], (error, results, _) => {
      if (error) {
        throw error;
      }
      res.send(results);
      }
    );
  })


  app.post("/todos", (req, res) => {

    const todo = req.body;

    const rulesTodo = {
      user_id: 'required|number',
      title: 'required|alpha',
      completed: 'boolean'
    }

    const sanitizationRules = { // help clean any issues or anomalies
      user_id: 'trim|escape',// clears white spaces
      title: 'lowerCase',//only allows lowercase - or changes to lowercase
      completed: 'escape|stripTags' //prevents HTML snippets to access data base - 
    }

    validate(todo, rulesTodo, sanitizationRules)
  .then((value) => { console.log('cheguei aqui')
    sanitize(value, rulesTodo)
      res.send(value)
  }).catch((error) =>{
    res.status(400).send(error)
  })


    
    // db.query("INSERT INTO todos SET ?", [todo], (error, results, _) => {
    //   if (error) {
    //     throw error;
    //   }

    //   const { insertId } = results;

    //   db.query("SELECT * FROM todos WHERE id = ? LIMIT 1", [insertId], (error, results, _) => {
    //       if (error) {
    //         throw error;
    //       }

    //       res.send(results[0]);
    //     }
    //   );
    // });
  });

  // Update todo
  app.put("/todos/:id", (req, res) => {
    const { id } = req.params

    const todo = req.body

    // SET so we do not have to write all the params in my object

    db.query('UPDATE todos SET ? WHERE id = ?', [todo, id], (error, results, _) => {
      if (error) {
        throw error
      }

      db.query('SELECT * FROM todos WHERE id = ? LIMIT 1', [id], (error, results, _) => {
        if (error) {
          throw error
        }

        res.send(results[0])
      })
    })
  });

  app.patch("/todos/:id/completed", (req, res) => {
    const { id } = req.params

    const { isCompleted } = req.body

    const status = isCompleted ? 1 : 0

    db.query('UPDATE todos SET status = ? WHERE id = ?', [status, id], (error, results, _) => {
      if (error) {
        throw error
      }

      res.send(isCompleted)
    })
  });

  app.delete("/todos/:id/", (req, res) => {
    const { id } = req.params

    db.query('SELECT * FROM todos WHERE id = ?', [id], (error, results, _) => {
      if (error) {
        throw error
      }

      const [todo] = results

      db.query('DELETE FROM todos WHERE id = ?', [id], (error, results, _) => {
        if (error) {
          throw error
        }

        res.send(todo)
      })
    })
  })





}