import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendButtonVid(m.chat, res.video, `*Judul:* ${res.title}\n${res.author ? `*Pembuat Video:* ${res.author}` : '\n' }`.trim(), 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!', 'menu', usedPrefix + 'menu', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tik(tok)?(dl)?)$/i

handler.premium = true

export default handler
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper' 
 import fetch from 'node-fetch' 
  
 let handler = async (m, { conn, args, usedPrefix, command }) => { 
     if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243` 
     const { author: { nickname }, video, description } = await tiktokdl(args[0]) 
         .catch(async _ => await tiktokdlv2(args[0])) 
         .catch(async _ => await tiktokdlv3(args[0])) 
     const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd 
     if (!url) throw 'Can\'t download video!' 
     conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:\n${description}` : ''}`, await (await fetch(url)).buffer(), 
         url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [ 
         ['ᴅᴏɴᴀꜱɪ', `.donasi`], 
         ['ᴀᴜᴅɪᴏ', `.tiktokaudio ${args}`], 
         [null, null]], m) 
 } 
 handler.help = ['tiktok', 'tiktok', 'tiktokdl'].map(v => v + ' <url>') 
 handler.tags = ['downloader'] 
 handler.command = /^(tik(tok)?(tok)?(dl)?)$/i

 handler.premium = true
 handler.register = true

 export default handler
