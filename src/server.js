import express from 'express'
import {retornaDados, buscaAnoHistorico, buscaIdHistorico}  from './service/service.js'

const app = express()
const port = 8080




app.get('/historicoIPCA', (req, res) => {
    let historicos = retornaDados()
    let historicoAno = parseInt(req.query.busca)
    let resultadoAno = historicoAno ? buscaAnoHistorico(historicoAno) : historicos
    console.log(resultadoAno)
    if(resultadoAno.length > 0)
    {
        res.json(resultadoAno)
    }else {res.status(404).send({"erro": "busca inválida!"})}
})

app.get('/historicoIPCA/:id', (req, res) => {
    let idHistorico = parseInt(req.params.id)
    let resultadoId = buscaIdHistorico(idHistorico)
    if(resultadoId) {
        res.json(resultadoId)
    }else {res.status(404).send({"error": "Id não encontrado!"})}
})


app.listen(port, () => {
    console.log('runfando!')
})



