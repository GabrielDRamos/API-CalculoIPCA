import historicoInflacao from '../data/data.js'

export const retornaDados = () => {
    return historicoInflacao
}

export const buscaAnoHistorico = (anoHistorico) => {
    let resultadoBusca = historicoInflacao.filter(historico => historico.ano === anoHistorico )
    return resultadoBusca
}

export const buscaIdHistorico = (idHistorico) => {
    let resultadoId = historicoInflacao.find(historico => historico.id === idHistorico)
    return resultadoId
}

