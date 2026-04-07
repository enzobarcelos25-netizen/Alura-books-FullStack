const express = require("express")
const rotaLivro = require("./rotas/livro.js")
const rotaFavorito = require("./rotas/favorito.js") // 👈 IMPORTANTE
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors({ origin: "*" }))

app.use('/livros', rotaLivro)
app.use('/favoritos', rotaFavorito) // 👈 ESSA LINHA É O QUE FALTA

const port = 8000

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})