import express from 'express'

const app = express()

app.get('/rota', (request, response) => {
  return response.json([
    {id: 1, name: 'Joao'},
    {id: 2, name: 'Joao 2'},
    {id: 3, name: 'Joao 3'},
    {id: 4, name: 'Joao 4'},
  ])
})

app.listen(3333)