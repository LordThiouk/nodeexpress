const express = require('express')
const app = express()

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
      },
      {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
      },
      {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
      }
]
app.get('/api/notes', (request, response) => {
    response.json(notes)
  })

app.get('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => {
      console.log(note.id, typeof note.id, id, typeof id, note.id === id)
      return note.id === id
    })
    console.log(note)
    response.json(note)
  })

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})