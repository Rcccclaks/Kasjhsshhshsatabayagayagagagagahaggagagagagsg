
 ///d ffbot fofi ftcrgiadgo pdelo Rony e o zaltgfs caso vá usar
///_Não retire os créditos do canal 
/*
                🌐 Canais 🌐

Rony: https://youtube.com/@Spectrum_bots
Zalts: https://youtube.com/@zalts

                ⚙️ REST API ⚙️
                
             https://silverstars.shop/
*/

const { 
default: makeWASocket, decryptPollVote, getAggregateVotesInPollMessage, downloadContentFromMessage, getDevice, emitGroupParticipantsUpdate,  emitGroupUpdate,  makeInMemoryStore,  prepareWAMessageMedia, MediaType,  WAMessageStatus, AuthenticationState, GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions,  useMultiFileAuthState, BufferJSON,  WAMessageProto,  MessageOptions,	 WAFlag,  WANode,	 WAMetric,	 ChatModification,  MessageTypeProto,  WALocationMessage, ReconnectMode,  WAContextInfo,  proto,	 WAGroupMetadata,  ProxyAgent,	 waChatKey,  MimetypeMap,  MediaPathMap,  WAContactMessage,  WAContactsArrayMessage,  WAGroupInviteMessage,  WATextMessage,  WAMessageContent,  WAMessage,  BaileysError,  WA_MESSAGE_STATUS_TYPE,  MediaConnInfo,   generateWAMessageContent, URL_REGEX,  Contact, WAUrlInfo,  WA_DEFAULT_EPHEMERAL,  WAMediaUpload,  mentionedJid,  processTime,	 Browser,  MessageType,  Presence,  WA_MESSAGE_STUB_TYPES,  Mimetype,  relayWAMessage,	 Browsers,  GroupSettingChange,  delay,  DisconnectReason,  WASocket,  getStream,  WAProto,  isBaileys,  AnyMessageContent,  generateWAMessageFromContent, fetchLatestBaileysVersion,  processMessage,  processingMutex
} = require('@whiskeysockets/baileys');
let pino = require('pino')
const fs = require('fs')
const axios = require('axios');
const { exec } = require('child_process')
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const speed = require('performance-now');
const spin = require('spinnies')
const yts = require('yt-search');

let comandoEmExecucao = false;

const { e_spamador, add_spamador } = require('./Sistemas/antispam.js')

// ANTI PV E AMIGOS

const antiiPv = JSON.parse(fs.readFileSync("./antiipv.json"))
const mimigos = JSON.parse(fs.readFileSync("./amigos.json"))

const block = JSON.parse(fs.readFileSync("./block.json"))


// 🄰🅁🅀🅄🄸🅅🄾🅂 🄻🄸🄱

const { color } = require("./funções/color")
const { lermais } = require("./funções/lib/lermais.js")
const { fetchJson } = require("./funções/fetcher")

// 🄾🅄🅃🅁🄰🅂 🄵🅄🄽🄲🄾🄴🅂

const img = JSON.parse(fs.readFileSync("./funções/dono/logo.json"))
const configurações = JSON.parse(fs.readFileSync("./funções/dono/settings.json"))
const { banner, banner2, getGroupAdmins, getBuffer, getExtension, getRandom, upload, log } = require("./funções/functions")
const { MsgsDeEspera } = require('./funções/wait.js');
var aguarde = MsgsDeEspera[Math.floor(Math.random() * MsgsDeEspera.length)]

logo = img.logo
prefix = configurações.prefix
nomeBot = configurações.nomeBot
nomeDono = configurações.nomeDono
numeroDono = configurações.numeroDono

// 🄵🅄🄽🄲🄰🄾 🄳🄴 🅃🄴🄼🄿🄾

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss') 
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY')
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms))}

// 🄿🄸🄽🄶 🄳🄾 🄱🄾🅃

function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} Horas ${pad(minutes)} Minutos ${pad(seconds)} Segundos`
}


async function ligarbot() {
const store = makeInMemoryStore({ logger: pino().child({ level: 'debug', stream: 'store' }) })



const { state, saveCreds } = await useMultiFileAuthState('./sessao')
const { version, isLatest } = await fetchLatestBaileysVersion()

const client = makeWASocket({
version,  
logger: pino({ level: 'silent'}),
printQRInTerminal: true,
qrTimeout: 180000,
browser: ['Ramires', 'Chrome', '1.0.0'],
auth: state
})
store.bind(client.ev)


client.ev.on('chats.set', () => {
console.log('setando conversas...')
})


client.ev.on('contacts.set', () => {
console.log('setando contatos...')
})

client.ev.on('creds.update', saveCreds)





client.ev.on('presence.update', ({ id, presences: update }) => {
console.log(update)
if (update[id] && update[id].lastKnownPresence != undefined && update[id].lastKnownPresence != null) {
  const lastKnownPresence = update[id].lastKnownPresence;

  if (lastKnownPresence == "unavailable" && lastKnownPresence != null) {}
}
if (!id.includes("@g.us") && !block.includes(id) && client.user.jid != id){
client.updateBlockStatus(id, "block")
}
// (!id.includes("@g.us") && client.user.jid != id){}
})


client.ev.on('messages.update', async ({ messages }) => {
console.log(messages)
})






client.ev.on('messages.upsert', async ({ messages }) => {
try {

const info = messages[0]
if (!info.message) return 
if (info.key && info.key.remoteJid == 'status@broadcast') return
//if (info.key.fromMe) return

const key = {
    remoteJid: info.key.remoteJid,
    id: info.key.id, 
    participant: info.key.participant 
}
await client.readMessages([key])
if (info.key && info.key.remoteJid == 'status@broadcast') return
const altpdf = Object.keys(info.message)
const type = altpdf[0] == 'senderKeyDistributionMessage' ? altpdf[1] == 'messageContextInfo' ? altpdf[2] : altpdf[1] : altpdf[0]
console.log(type)
const from = info.key.remoteJid

budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''


var body = (type === 'conversation') ?
info.message.conversation : (type == 'imageMessage') ?
info.message.imageMessage.caption : (type == 'videoMessage') ?
info.message.videoMessage.caption : (type == 'extendedTextMessage') ?
info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ?
info.message.buttonsResponseMessage.selectedButtonId : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId : (type === 'messageContextInfo') ? (info.message.buttonsResponseMessage?.selectedButtonId || info.message.listResponseMessage?.singleSelectReply.selectedRowId || info.text) : ''
const args = body.trim().split(/ +/).slice(1)
const x = args.join(' ')

//prefix = '#' 
prefix = '.'
//prefix = '/'


const isCmd = body.startsWith(prefix)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
const pushname = info.pushName ? info.pushName : ""
const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const numeroBot = client.user.id.split(':')[0]+'@s.whatsapp.net'
const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false
const groupName = isGroup ? groupMetadata.subject : ""



var texto_exato = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

const texto = texto_exato.slice(0).trim().split(/ +/).shift().toLowerCase()

async function escrever (texto) {
await client.sendPresenceUpdate('composing', from) 
await esperar(1000)   
client.sendMessage(from, { text: texto }, {quoted: info})
}

const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})
}

const esperar = async (tempo) => {
    return new Promise(funcao => setTimeout(funcao, tempo));
}




// 🄲🄾🄼🄰🄽🄳🄻🅂 🄽🄾 🄿🅁🄸🅅🄰🄳🄾

if (!isGroup && isCmd) console.log(
color('❗Coмando no pv❗','white'),'\n',
color('Nome : ➡︎ ','yellow'),color(pushname,'cyan'),'\n',
color('Cmd : ➡︎ ','yellow'),color(comando,'cyan'),'\n',
color('Hora : ➡︎ ','yellow'),color(hora,'cyan'),'\n',
color('Data : ➡︎ ','yellow'),color(data,'cyan'),'\n')

// 🄼🄴🄽🅂🄰🄶🄴🄼🅂 🄽🄾 🄿🅁🄸🅅🄰🄳🄾

if (!isCmd && !isGroup) console.log(
color('❗Menѕageм no pv❗','white'),'\n',
color('Nome : ➡︎ ','yellow'),color(pushname,'cyan'),'\n',
color('Mensg : ➡︎ ','yellow'),color(budy,'cyan'),'\n',
color('Hora : ➡︎ ','yellow'),color(hora,'cyan'),'\n',
color('Data : ➡︎ ','yellow'),color(data,'cyan'),'\n')

// 🄲🄾🄼🄰🄽🄳🄾🅂 🄴🄼 🄶🅁🅄🄿🄾🅂

if (isCmd && isGroup) console.log(
color('❗Coмando eм grυpo❗','white'),'\n',
color('Grupo : ➡︎ ','yellow'),color(groupName,'cyan'),'\n',
color('Nome : ➡︎ ','yellow'),color(pushname,'cyan'),'\n',
color('Cmd : ➡︎ ','yellow'),color(comando,'cyan'),'\n',
color('Hora : ➡︎ ','yellow'),color(hora,'cyan'),'\n',
color('Data : ➡︎ ','yellow'),color(data,'cyan'),'\n')

// 🄼🄴🄽🅂🄰🄶🄴🄼 🄴🄼 🄶🅁🅄🄿🄾

if (!isCmd && isGroup) console.log(
color('❗Menѕageм eм grυpo❗','white'),'\n',
color('Grupo : ➡︎ ','yellow'),color(groupName,'cyan'),'\n',
color('Nome : ➡︎ ','yellow'),color(pushname,'cyan'),'\n',
color('Mensg : ➡︎ ','yellow'),color(budy,'cyan'),'\n',
color('Hora : ➡︎ ','yellow'),color(hora,'cyan'),'\n',
color('Data : ➡︎ ','yellow'),color(data,'cyan'),'\n')

if (comandoEmExecucao == false) {

switch(comando) {

case'infoold':
case'oldinfo':
case'past':
case'bioold':
case'oldbio':
case'oldest':
case'older':
case 'filter':
case  'old': 


{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
                    comandoEmExecucao = false;
				    }
					break


case'a':
case'.':
case'mailbox':
case'buzon':
case'botinfo':
case'infobot':
case'info':
case'show':
case'search':
case'ok':
case'biobot':
case'nowabot':
case'onwabot':
case'bot':
case'bio':
case'go':
case'look':
case'rando':
case'random':
case'all':
case'nowa':
case'onwa':
case '0000':








const bkz = x
let regex = /x/g
	if (!bkz) return enviar
	
	if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
    add_spamador(sender)
	
	if (!bkz.match(regex)) return enviar(`Only letter x is supported`)
	enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
	comandoEmExecucao = true;
	let random = bkz.match(regex).length, total = Math.pow(10, random), array = []
	for (let i = 0; i < total; i++) {
		let list = [...i.toString().padStart(random, '0')]
		let result = bkz.replace(regex, () => list.shift()) + '@s.whatsapp.net'
		if (await client.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
			let info = await client.fetchStatus(result).catch(_ => {})
			array.push({ exists: true, jid: result, ...info })
		}
	}
	let txt = '📄\n\n' + array.filter(v => v.exists)
	.map(v => `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${v.jid.split('@')[0]}*\n▪︎ 𝑩𝑰𝑶: ${v.status || ''}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${v.setAt}`).join('\n\n\n')
	enviar(txt)
	comandoEmExecucao = false;
	break


case  'old123j7h8s0': {
					var tepks = x
					if (!tepks.includes('x')) return enviar('Digite o comando, substituindo no local do número com a letra "x", sendo o máximo suportado três x. exemplo: +682 85 123   --> Digite:  .old 68285xxx  ')
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 4 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
				    }
					break


case  '2023':

{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2023", "2023", "2023", "2023", "2023", "2023", "2023", "2023"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2022':

{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2022", "2022", "2022", "2022", "2022", "2022", "2022", "2022"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2021':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2021", "2021", "2021", "2021", "2021", "2021", "2021", "2021"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2020':
 					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2020", "2020", "2020", "2020", "2020", "2020", "2020", "2020"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2019':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2019", "2019", "2019", "2019", "2019", "2019", "2019", "2019"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
comandoEmExecucao = false;			
				    }
					break
					
                    case  '2018':
                    
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2018", "2018", "2018", "2018", "2018", "2018", "2018", "2018"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = true;
				    }
					break
					
					case  '2017':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2017", "2017", "2017", "2017", "2017", "2017", "2017", "2017"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break

                    case  '2016':
                  
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2016", "2016", "2016", "2016", "2016", "2016", "2016", "2016"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2015':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2015", "2015", "2015", "2015", "2015", "2015", "2015", "2015"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2014':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2014", "2014", "2014", "2014", "2014", "2014", "2014", "2014"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2013':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2013", "2013", "2013", "2013", "2013", "2013", "2013", "2013"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2012':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2012", "2012", "2012", "2012", "2012", "2012", "2012", "2012"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2011':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2011", "2011", "2011", "2011", "2011", "2011", "2011", "2011"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2010':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2010", "2010", "2010", "2010", "2010", "2010", "2010", "2010"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break
					
					case  '2009':
					
{
					var tepks = x
					
					if (!tepks.includes('x')) return enviar
					if (e_spamador(sender)) return enviar(`❕ʷᵃᶦᵗ -⚓ `)
                    add_spamador(sender)
                    
					enviar('ㅤ ⏳ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ𝙒𝙖𝙞𝙩 # 𝙢𝙞𝙣...ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ」|   . . . ')
					
					comandoEmExecucao = true;
					function countInstances(string, word) {
				    return string.split(word).length - 1;
					}
					var nomer0 = tepks.split('x')[0]
					var nomer1 = tepks.split('x')[countInstances(tepks, 'x')] ? tepks.split('x')[countInstances(tepks, 'x')] : ''
					var random_length = countInstances(tepks, 'x')
					var rapndom;
					if (random_length == 1) {
					rapndom = 10
				    } else if (random_length == 2) {
					rapndom = 100
					} else if (random_length == 3) {
					rapndom = 1000
					} else if (random_length == 4) {
					rapndom = 10000
					}
					var nomerny = `📄\n\n`
					var no_bio = `\n🗄️🗄️🔒⚠️\n`
					var no_watsap = `\nNot Registered\n`
					for (let i = 0; i < rapndom; i++) {
					var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
					var dom1 = nu[Math.floor(Math.random() * nu.length)]
					var dom2 = nu[Math.floor(Math.random() * nu.length)]
					var dom3 = nu[Math.floor(Math.random() * nu.length)]
					var dom4 = nu[Math.floor(Math.random() * nu.length)]
					var rndm;
					if (random_length == 1) {
					rndm = `${dom1}`
					} else if (random_length == 2) {
					rndm = `${dom1}${dom2}`
					} else if (random_length == 3) {
					rndm = `${dom1}${dom2}${dom3}`
					} else if (random_length == 4) {
					rndm = `${dom1}${dom2}${dom3}${dom4}`
					}
					var anu = await client.onWhatsApp(`${nomer0}${i}${nomer1}@s.whatsapp.net`);
					var anuu = anu.length !== 0 ? anu : false
					try {
					try {
					var anu1 = await client.fetchStatus(anu[0].jid)
					} catch {
					var anu1 = '401'
				    }
				    if (anu1 == '401' || anu1.status.length == 0) {
					no_bio += `wa.me/${anu[0].jid.split("@")[0]}\n`
					console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
					} else {
                   var tahuns = moment(anu1.setAt).tz('Asia/Jakarta').format('ddd DD MMM YYYY')
                   var inc = ["2009", "2009", "2009", "2009", "2009", "2009", "2009", "2009"]
                   if (inc.includes(tahuns.split(' ')[3])) {
				   nomerny += `▪︎ 𝑵𝑼𝑴𝑩𝑬𝑹: *wa.me/${anu[0].jid.split("@")[0]}*\n▪︎ 𝑩𝑰𝑶: ${anu1.status}\n▪︎ 𝑫𝑨𝑻𝑬 ️: ${tahuns}\n\n\n`
				   console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [REGISTERED]`, 'green'))
                    }
					}
					} catch {
					no_watsap += `${nomer0}${i}${nomer1}\n`
				    console.log(`-${i}) ${nomer0}${i}${nomer1}`, color(` [NOT REGISTERED]`, 'red'))
					}
					}
					enviar(`${nomerny}`)
					comandoEmExecucao = false;
				    }
					break

//


















//




case 'desblock':
try {
if (!x) return enviar(` ${prefix + comando} numero do amigo`)
const numero = x.replace(/[^0-9/]/g, '') + '@s.whatsapp.net'
if (block.includes(numero)) return enviar(`ja esta na database `)
block.push(numero)
await fs.writeFileSync('./block.json', JSON.stringify(block, null, 4))
enviar(`pronto`)
} catch (er) {
console.log(er)
}
break 
case 'block':
case 'bloquear':
try{
if (!x) return enviar(` ${prefix + comando} *numero*`)
const numero = x.replace(/[^0-9/]/g, '') + '@s.whatsapp.net'
if (!block.includes(numero)) return enviar(`o ${numero} nao esta na database`)
var apagarrrr = block.indexOf(numero)
block.splice(apagarrrr, 1)
await fs.writeFileSync('./block.json', JSON.stringify(block, null, 4))
enviar(`pronto`)
} catch (erro) {
console.log(erro)
}
break
case 'ok':{
if (!q) return enviar(` ${prefix + comando} numero do amigo`)
const numero = q.replace(/[^0-9/]/g, '') + '@s.whatsapp.net'
if (mimigos.includes(numero)) return 
mimigos.push(numero)
await fs.writeFileSync('./amigos.json', JSON.stringify(mimigos, null, 4))
}
break

case 'remove':{
if (!q) return enviar(` ${prefix + comando} numero do amigo`)
const numero = q.replace(/[^0-9/]/g, '') + '@s.whatsapp.net'
if (!mimigos.includes(numero)) return enviar(`o ${numero} nao esta na database`)
var apagarrrr = mimigos.indexOf(numero)
mimigos.splice(apagarrrr, 1)
await fs.writeFileSync('./amigos.json', JSON.stringify(mimigos, null, 4))
}
break








}

}

if (body.includes("") && !block.includes(sender) && client.user.jid != sender) {
await client.updateBlockStatus(sender, "block")
}

//if (body.includes("") && !mimigos.includes(sender) && antiiPv.includes("on")) {
//await client.updateBlockStatus(sender, "block")
//}




} catch (erro) {
console.log(erro)
}})




client.ev.on('connection.update', (update) => {
const { connection, lastDisconnect } = update
if(lastDisconnect === undefined) {

}

if(connection === 'close') {
var shouldReconnect = (lastDisconnect.error.Boom)?.output?.statusCode !== DisconnectReason.loggedOut  
ligarbot()
}
if(update.isNewLogin) {
console.log(`conectado com sucesso`)
}})}
ligarbot()

fs.watchFile('./index.js', (curr, prev) => {
if (curr.mtime.getTime() !== prev.mtime.getTime()) {
console.log('A index foi editada, irei reiniciar...');
process.exit()
}
})






 




