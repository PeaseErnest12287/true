const insults = [
    "You're like a cloud. When you disappear, it's a beautiful day!",
    "You bring everyone so much joy when you leave the room!",
    "I'd agree with you, but then we’d both be wrong.",
    "You’re not stupid; you just have bad luck thinking.",
    "Your secrets are always safe with me. I never even listen to them.",
    "I'd explain it to you, but I left my crayons at home.",
    "You're proof that even evolution can go in reverse.",
    "If I wanted to hear from an idiot, I'd call you.",
    "You're like a software update. Whenever I see you, I think, 'Not now.'",
    "You're the reason the gene pool needs a lifeguard.",
    "I'd give you a nasty look, but you've already got one.",
    "You're like a candle in the wind—useless and easily blown away.",
    "You're not the dumbest person on the planet, but you better hope they don't die."
];


async function insultCommand(sock, chatId, mentionedUser) {
    if (!mentionedUser) {
        await sock.sendMessage(chatId, { text: 'Please mention a user to insult.' });
        return;
    }

    const randomInsult = insults[Math.floor(Math.random() * insults.length)];
    await sock.sendMessage(chatId, { text: `@${mentionedUser} ${randomInsult}`, mentions: [mentionedUser] });
}

module.exports = { insultCommand };
