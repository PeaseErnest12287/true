const axios = require('axios');

async function lyricsCommand(sock, chatId, songTitle) {
    if (!songTitle) {
        await sock.sendMessage(chatId, { text: 'Please provide a song title!' });
        return;
    }

    try {
        const response = await axios.get('https://shazam.p.rapidapi.com/songs/get-details', {
            params: { key: songTitle }, // Adjust parameters based on API documentation
            headers: {
                'X-RapidAPI-Key': 'b832024799msh4b361f17fd62decp1a356fjsns877511b1f4a0',
                'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
            }
        });
        const lyrics = response.data.sections.find(section => section.type === 'LYRICS').text.join('\n') || 'Lyrics not found.';

        await sock.sendMessage(chatId, { text: `🎶 *${songTitle}* 🎶\n\n${lyrics}` });
    } catch (error) {
        await sock.sendMessage(chatId, { text: 'An error occurred while fetching the lyrics.' });
    }
}

module.exports = { lyricsCommand };

