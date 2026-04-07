const fs = require("fs")

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json", "utf-8"))
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json", "utf-8"))

    const livroFiltrado = livros.filter(livro => Number(livro.id) === Number(id))[0]
    return livroFiltrado
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json", "utf-8"))

    const novaListadeLivros = [...livros, livroNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novaListadeLivros))
}

function modificaLivro(modificacoes, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json", "utf-8"))
   const indiceModificado = livrosAtuais.findIndex(livro => Number(livro.id) === Number(id))

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtuais))
}

function deletarLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json", "utf-8"))
    const livrosFiltrados = livros.filter(livro => Number(livro.id) !== Number(id))

    fs.writeFileSync("livros.json", JSON.stringify(livrosFiltrados))
}



module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletarLivro
}