import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'
import fs from 'fs'
const { levelling } = '../lib/levelling.js'
import moment from 'moment-timezone'
import { promises } from 'fs'
import { join } from 'path'
const time = moment.tz('Asia/Riyadh').format('HH')
let wib = moment.tz('Asia/Riyadh').format('HH:mm:ss')

// -----++------++-------+++-------+--


let venomImg = 'https://files.catbox.moe/jno4j2.jpg';
    let img = await prepareWAMessageMedia({ image: { url: venomImg } }, { thumbnail: venomImg, upload: conn.waUploadToServer });

let handler = async (m, { conn, usedPrefix, command}) => {

let d = new Date(new Date + 3600000)
    let locale = 'ar'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`
//let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './src/avatar_contact.png')

let user = global.db.data.users[who]
let {money, joincount} = global.db.data.users[m.sender];
let { name, exp, diamond, credit, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
let { min, xp, max } = xpRange(user.level, global.multiplier)
let username = conn.getName(who)
let rtotal = Object.entries(global.db.data.users).length || '0'
let math = max - xp
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850) 

const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
global.fcontact = { key: { fromMe: false, participant: `0@s.whatsapp.net`, remoteJid: 'status@broadcast' }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

let venomText = `
- *#تسجيل*
> منشن عضو ما مع الامر عشان تقوم بتسجيل لقب له
- *#الالقاب*
> يرسل لك البوت قائمة الالقاب في هذه المجموعة مع منشن لكل الالقاب
- *#لقبي*
> يعطيك البوت لقبك
- *#لقبه*
> منشن شخص ما مع الامر عشان يعطيك البوت لقبه
- *#متوفر*
> تكتب الأمر و بجانبه للقب الي تبي تشوف اذا متوفر او لا
- *#حذف-تسجيل*
> يقوم بحذف لقبك او لقب العضو الممنشن
`

    const device = getDevice();

    const interactiveMessage = {
    body: { text: venomText },
    footer: { text: `> *𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝙗𝙮 𝙆𝙎𝘼*`.trim() },  
    header: {
        title: `*⌗ - ارحب ذي قايمة اوامر الالقاب لبوت الفا 👇🏻 :*`,
        hasMediaAttachment: true,
        imageMessage: img.imageMessage
    },
    nativeFlowMessage: {
        buttons: [ 
              {
               name: "cta_url",
               buttonParamsJson: '{"display_text":"BOT UPDATE ϟ","url":"https://whatsapp.com/channel/0029VaoF4WxCsU9KSMOz7t0D","merchant_url":"https://www.google.com"}'
            }
          ],
        messageParamsJson: ''
    }
};

let msg = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
        message: {
            interactiveMessage,
        },
    },
}, { userJid: conn.user.jid, quoted: m })
conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});


};

handler.help = ['ytsearch <texto>'];
handler.tags = ['search'];
handler.command = /^(NC)$/i;
handler.group = true;
handler.admin = true;
export default handler;

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}

    function ucapan() {
      const time = moment.tz('Asia/Riyadh').format('HH')
      let res = "صباح الفل ☀️"
      if (time >= 4) {
        res = "صباح الخير 🌄"
      }
      if (time >= 10) {
        res = "مساء الخير ☀️"
      }
      if (time >= 15) {
        res = "مساء النور 🌇"
      }
      if (time >= 18) {
        res = "تصبح على خير 🌙"
      }
      return res
                     }
