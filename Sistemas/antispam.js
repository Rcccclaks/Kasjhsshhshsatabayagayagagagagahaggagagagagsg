const usedCommandRecently = new Set()

const e_spamador = (usuario) => !!usedCommandRecently.has(usuario)

const add_spamador = (usuario) => {
    usedCommandRecently.add(usuario)
    setTimeout(() => usedCommandRecently.delete(usuario), 110000) 
}

module.exports = {
    e_spamador,
    add_spamador
}


// tabela do tempo médio

//11 minutos 8100 00
//10 minutos 7100 00
//9 minutos 6100 00
//8 minutos 5100 00
//7 minutos 4100 00
//6 minutos 3100 00
//5          2100 00

//1 minuto e 40 segundos     1100 00