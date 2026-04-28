import fs from "fs"
import stylizedChar from "./fancy.js"

export default function stylizedCardMessage(text) {
  return {
    text: stylizedChar(text),
    contextInfo: {
      externalAdReply: {
        title: "𝑲𝒊𝒏𝒈 𝒘𝒆𝒏𝒔𝒍𝒆𝒚 𝑨𝑰👑",
        body: "𝐊𝐢𝐧𝐠 𝐰𝐞𝐧𝐬𝐥𝐞𝐲 𝐀𝐈👑",
        thumbnail: fs.readFileSync("./database/DigiX.jpg"),
        sourceUrl: "https://whatsapp.com",
        mediaType: 1,
        renderLargerThumbnail: false
      }
    }
  }
}
