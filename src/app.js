const express = require('express')
const { v4: uuidv4, validate } = require('uuid')
const app = express()

app.use(express.json())

const repositories = []

app.get("/repositories", (req, res) => {
    if (repositories.length == 0) {
        res
        .status(404)
        .json({ msg: "Você ainda não possui nenhum repositório!" })
    }
    
    else {
        let { title } = req.query

        if (title != null) {
            title = title.trim().toLowerCase()
            const repos = repositories.filter(repo => repo.title.trim().toLowerCase().includes(title))

            if (repos.length == 0) {
                res
                    .status(404)
                    .json({ msg: "Nenhum repositório foi encontrado!" })
            }

            else {
                res.json(repos)
            }

        }

        else {
            res.json(repositories)
        }

    }
})

app.post("/repositories", (req, res) => {
    const id = uuidv4()
    const likes = 0
    const { title, url, techs } = req.body

    const repo = { id, title, url, techs, likes }
    repositories.push(repo)

    res.json({
        msg: 'Repositório adicionado com sucesso!',
        repository: repo 
    })
})

app.put("/repositories/:id", (req, res) => {
    const { id } = req.params

    if (!validate(id)) {
        res
            .status(403)
            .json({ msg: "Esse repositório não possui um ID válido!" })
    }

    else {
        const index = repositories.findIndex(repo => repo.id == id)

        if (index == -1) {
            res
                .status(404)
                .json({ msg: "Esse repositório não foi encontrado!" })
        }

        else {
            const { title, url, techs } = req.body
            const likes = repositories[index].likes
            const repo = {id, title, url, techs, likes}

            repositories[index] = repo

            res.json({
                msg: "Repositório alterado com sucesso!",
                repository: repo
            })
        }
    }
})

app.delete("/repositories/:id", (req, res) => {
    const { id } = req.params

    if (!validate(id)) {
        res
            .status(403)
            .json({ msg: "Esse ID não é válido!" })
    }

    else {
        const index = repositories.findIndex(repo => repo.id == id)

        if (index == -1) {
            res
                .status(404)
                .json({ msg: "Esse repositório não foi encontrado!" })
        }

        else {
            repositories.splice(index, 1)
            res.json({ msg: "Repositório excluído com sucesso!" })
        }
    }
})

app.post("/repositories/:id/like", (req, res) => {
    const { id } = req.params

    if (!validate(id)) {
        res
            .status(403)
            .json({ msg: "Esse ID não é válido!" })
    }

    else {
        const index = repositories.findIndex(repo => repo.id == id)

        if (index == -1) {
            res
                .status(404)
                .json({ msg: "Esse repositório não foi encontrado!" })
        }

        else {
            let { id, title, url, techs, likes } = repositories[index]

            const repo = { id, title, url, techs, likes: ++likes }
            repositories[index] = repo

            res.json({
                msg: "Like adicionado ao repositório!",
                repository: repo
            })
        }
    }
})

module.exports = app
