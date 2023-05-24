const menu = (prefix, nomeBot, numeroDono, nomeDono, hora, data, pushname, lermais, sender) => {
return `
${lermais}
┏━━━━━━━━━━━━━━
┃
╠〢「 © ${nomeBot} 」
┃
┗━━━━━━━━━━━━┓
┏━━━━━━━━━━━━┛
╠〢「 PESQUISAR/BAIXAR 」
┃
║[ 1 ] ${prefix}Play
║[ 2 ] ${prefix}Playdocument
║[ 3 ] ${prefix}Play2
║[ 5 ] ${prefix}Ytsearch
┃
┗━━━━━━━━━━━━┓
┏━━━━━━━━━━━━┛
╠〢「 CMDS/TODOS 」
┃
║[ 6 ] ${prefix}Dono
║[ 7 ] ${prefix}Ping
║[ 8 ] ${prefix}Fazernick
┃
┗━━━━━━━━━━━━━━
`
}
exports.menu = menu