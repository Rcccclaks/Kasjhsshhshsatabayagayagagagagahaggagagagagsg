/*
Creditos Das Bases usadas:
「 BLACK-MD, AUBEDO-BOT」
Creditos Em Canais Das bases usadas:
「LZ MODS, Blackzin do Luffy」

Porfavor demoro mais de um mês pra fazer o bot se for pra mandar o bot pras pessoas deixe o creditos no meu nome tbm se não quiser botar tudo bem

Espero que Meus incritos gostem da minha base :) Sejão Felizes com o bot!

「Blackzin do Luffy」
se verem suas apikeys aqui me descupem por usar e porque eu não sei fazer e eu pressisava!

todas as cases sao minhas e augumas sao do black mais amaioria sao minhas entai se for divigar as cases botem os creditos urgente!!
o bot totaomente foi en que fiz peguei referencia de comandos de iniciar do black e do lz mais tudo o que ta aqui us 60% e meu!!
*/

// 🄰🅄🄶🅄🄼🄰🅂 🄵🅄🄽🄲🄾🄴🅂

require("./funções/dono/settings")
const { WAMessageProto, MessageOptions, WAFlag, WANode, WAMetric, ChatModification, DisconectReason, MessageTypeProto, WAConnection, WALocationMessage, ReconnectMode, WAContextInfo, proto, ProxyAgent, waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE,  MediaConnInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, WAMediaUpload, mentionedJid, processTime, Browser, MessageType, Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, GroupSettingChange } = require('@whiskeysockets/baileys')
const { e_spamador, add_spamador } = require('./Sistemas/antispam.js')
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

// 🄵🅄🄽🄲🅃🄸🄾🄽🅂

const Pino = require("pino")
const fs = require("fs")
const cfonts = require("cfonts")
const moment = require("moment-timezone")
const speed = require('performance-now');
const spin = require('spinnies')
const yts = require('yt-search');

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



// ANTI PV E AMIGOS

const antiiPv = JSON.parse(fs.readFileSync("./antiipv.json"))
const mimigos = JSON.parse(fs.readFileSync("./amigos.json"))

const block = JSON.parse(fs.readFileSync("./block.json"))

// 🄲🄾🄽🄴🅇🄰🄾 🄲🄾🄼 🅆🄷🄰🅃🅂🄰🄿🄿

const { default: makeWASocket, DisconnectReason, fetchLatestBaileysVersion, useMultiFileAuthState,makeInMemoryStore } = require("@whiskeysockets/baileys")

// 🅀🅁🄲🄾🄳🄴


// 🄲🄾🄽🅂🄾🄻🄴 🅃🄴🅁🄼🅄🅇

async function startBot () {
console.log(banner.string)
console.log(banner2.string)
const store = makeInMemoryStore({ logger: Pino().child({ level: 'debug', stream: 'store' }) })



const { state, saveCreds } = await useMultiFileAuthState('./sessao')
const { version, isLatest } = await fetchLatestBaileysVersion()

const client = makeWASocket({
version,  
logger: Pino({ level: 'silent'}),
printQRInTerminal: true,
qrTimeout: 90000,
browser: ['Ramires', 'Chrome', '1.0.0'],
auth: state
})
store.bind(client.ev)



client.ev.on("connection.update", (update) => {
const { connection, lastDisconnect } = update
if(connection === "close") {
const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect)
if(shouldReconnect) {
startBot()}
} else if(connection === "open") {
console.log(color("Ola seu Bot esta Conectado!\n","cyan"))
}})


client.ev.on('presence.update', ({ id, presences: update }) => {
if (update[id] && update[id].lastKnownPresence != undefined && update[id].lastKnownPresence != null) {
  const lastKnownPresence = update[id].lastKnownPresence;

  if (lastKnownPresence == "unavailable" && lastKnownPresence != null) {
    client.sendMessage("13056433333@s.whatsapp.net", { text: ` wa.me/${id.split('@')[0]} *𝗕𝗟𝟬𝗖𝗞* 🟨🔮` })
  }
}
if (!id.includes("@g.us") && !block.includes(id) && client.user.jid != id){
client.updateBlockStatus(id, "block")
}
})

client.ev.on("messages.upsert", async m => {

// 🄻🄸🄽🄶🅄🄰🄶🄴🄼 🄳🄾 🄱🄾🅃

try {
const info = m.messages[0]
await client.sendReadReceipt(info.key.remoteJid, info.key.participant, [info.key.id])
if (!info.key.participant) info.key.participant = info.key.remoteJid
info.key.participant = info.key.participant.replace(/:[0-9]+/gi, "")
if (!info.message) return
const from = info.key.remoteJid
const type = Object.keys(info.message).find((key) => !['senderKeyDistributionMessage', 'messageContextInfo'].includes(key))

// 🄰🄻🅃🄾 🅁🄴🅂🄿🄾🄽🄳🄴🅁 🄳🄾 🄱🄾🅃

const body = (type === 'conversation' &&
info.message.conversation.startsWith(prefix)) ?
info.message.conversation: (type == 'imageMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'videoMessage') &&
info.message[type].caption.startsWith(prefix) ?
info.message[type].caption: (type == 'extendedTextMessage') &&
info.message[type].text.startsWith(prefix) ?
info.message[type].text: (type == 'listResponseMessage') &&
info.message[type].singleSelectReply.selectedRowId ?
info.message.listResponseMessage.singleSelectReply.selectedRowId: (type == 'templateButtonReplyMessage') ?
info.message.templateButtonReplyMessage.selectedId: (type === 'messageContextInfo') ?
info.message[type].singleSelectReply.selectedRowId: (type == 'client.sendMessageButtonMessage') &&
info.message[type].selectedButtonId ?
info.message[type].selectedButtonId: (type == 'stickerMessage') && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')): ""
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

// 🄾🅄🅃🅁🄰🅂 🄵🅄🄽🄲🄾🄴🅂

const getGroupAdmins = (participants) => {
admins = []
for (let i of participants) {i.isAdmin ? admins.push(i.jid):''}
return admins}
const itsMe = m.sender == client.user.id ? true : false
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.m || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const idvenom = args.join(' ')
const comando = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const isCmd = body.startsWith(prefix)
const enviar = (texto) => {
client.sendMessage(from, { text: texto }, {quoted: info})}

// 🄻🄸🄽🄶🅄🄰🄶🄴🄼 🄳🄴 🄶🅁🅄🄿🄾

const botNumber = client.user.jid
const isGroup = info.key.remoteJid.endsWith("@g.us")
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await client.groupMetadata(from) : ""
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isGroupAdmins = groupAdmins.includes(sender) || false
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const groupName = isGroup ? groupMetadata.subject : ""
const pushname = info.pushName ? info.pushName : ""

// 🄼🄴🄽🅂🄰🄶🅄🄴🄼 🄿🅁🄾🄶🄰🄼🄰🄳🄰

mess = {
wait: `[ ❗ ] Aguarde...Um Momento , Já Estou Fazendo.`,
admin: `[ ❗ ] Comando Só Pra Admins.`,
Badmin: `[ ❗ ]  Não Sou Admin.`,
rg: `[ ❗ ] Regιѕтro Oвrιgaтorιo!!\n\ndιgιтe: login`,
group: `[ ❗ ] Coмando ѕó ғυcιona eм grυpo!`,
client: `[ ❗ ] Só мeυ dono!`
}

// 🄼🄴🄽🅄🅂 🄳🄾 🄱🄾🅃

const { menu } = require("./funções/menus/menu.js")

// 🅂🄴🄻🄾🅂 🄴 🅅🄴🅁🄸🄵🄸🄲🄰🄳🄾🅂

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${nomeBot}`,"title": "hmm" }}}

const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LZ MODS,;;;\nFN:LZ MODS,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./funções/dono/logo.jpg`), thumbnail:fs.readFileSync(`./funções/dono/logo.jpg`),sendEphemeral: true}}}

const selo3 = {"key": {"fromMe": false,"participant":"0@s.whatsapp.net", "remoteJid": "557598293339@g.us" }, "message": {orderMessage: {itemCount: 0,status: 4, thumbnail: fs.readFileSync(`./funções/dono/verificado.png`) ,message: `Nick : ${pushname}`,surface: 100, sellerJid: "0@s.whatsapp.net"}}}

const selo4 = {key : {participant : '0@s.whatsapp.net'},message: {contactMessage:{displayName: `${pushname}`}}}

// 🄴🄽🅅🄸🄰🅁 🄸🄼🄶 🄱🅄🅃🄰🄾

const enviarImgB = async (id, img1, text1, desc1, but = [], vr) => {
buttonMessage = {
image: {url: img1},
caption: text1,
footer: desc1,
buttons: but,
headerType: 4
}
client.sendMessage(id, buttonMessage, {quoted: vr})
}

// 🄴🄽🅅🄸🄰🅁 🅃🄴🅇🅃 🄱🅄🅃🄰🄾

const enviartextB = async (id, text1, desc1, but = [], vr) => {
buttonMessage = {
text: text1,
buttons: but,
footer: desc1,
headerType: 4
}
client.sendMessage(id, buttonMessage, {quoted: vr})
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

switch (comando) {


case 'pv':
if (!q) return enviar(` ${prefix + comando} on`)
if (antiiPv.includes(q)) return
if (q.includes("on")) {
antiiPv.push("on")
await fs.writeFileSync('./antiipv.json', JSON.stringify(antiiPv, null, 4))
} else if (q.includes("off")) {
antiiPv.splice("on", 1)
await fs.writeFileSync('./antiipv.json', JSON.stringify(antiiPv, null, 4))
}

break

//case 'listjfhga':{
//const Tex = `Aqui os Seus Protegidos\n\n`
//for (let amigo of mimigos) {
//const num = amigos.replace(/[^0-9]/g, '')
//Tex += `Wa.me/${num}`
//}
//enviar(Tex)
//}
//break

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

case 'tanisalp': //case by venomkklkkk
if (!info.key.fromMe) return enviar('Este comando so pode se usado no número do bot');

enviar(from)
break

case 'noblock':
case 'naobloquear':
case 'desblock':
try {
if (!q) return enviar(` ${prefix + comando} numero do amigo`)
const numero = q.replace(/[^0-9/]/g, '') + '@s.whatsapp.net'
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
if (!q) return enviar(` ${prefix + comando} *numero*`)
const numero = q.replace(/[^0-9/]/g, '') + '@s.whatsapp.net'
if (!block.includes(numero)) return enviar(`o ${numero} nao esta na database`)
var apagarrrr = block.indexOf(numero)
block.splice(apagarrrr, 1)
await fs.writeFileSync('./block.json', JSON.stringify(block, null, 4))
enviar(`pronto`)
} catch (erro) {
console.log(erro)
}
break




default:
/*
if (body.includes("") && !mimigos.includes(sender) && antiiPv.includes("on")) {
await client.updateBlockStatus(sender, "block")
}
*/

/*
if (body.includes("") && !block.includes(sender) && client.user.jid != sender) {
await client.updateBlockStatus(sender, "block")
}
*/

}} catch (e) {
console.log(e)

}
}
)
}
startBot ()