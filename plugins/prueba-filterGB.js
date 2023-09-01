import translate from '@vitalets/google-translate-api';
const prohibited = ['Mafer', 'cachudo', 'mafer', 'gore', 'cum', 'sergio kchudo', 'kchudo', 'pussy', 'rule34', 'harddick', 'dick', 'penis', 'pornography', 'child porn', 'child pornography', 'cp', 'cock', 'vagina', 'pussy']

let handler = async (m, { conn, text, usedPrefix, command }) => {
async function detectProhibitedWords(text) {
const translatedText = await translate(text, { to: 'en' })
const lowercaseTranslatedText = translatedText.text.toLowerCase()

if (prohibited.some(word => lowercaseTranslatedText.includes(word))) {
return m.reply('⚠️El texto mencionado contiene palabras prohibidas⚠️')
} else {
return null
}}

detectProhibitedWords(text)
.then(response => {
if (response) {
console.log(response)
} else {
m.reply('El texto no contiene palabras prohibidas.')
}})
}

handler.command = /^(prueba03)$/i 
export default handler
