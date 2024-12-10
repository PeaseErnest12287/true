const truths = [
    "What's your biggest fear?",
    "What was your most embarrassing moment?",
    "If you could be invisible for a day, what would you do?",
    "Who was your first crush?",
    "What’s one thing you’ve never told anyone?",
    "Have you ever lied to get out of trouble?",
    "What’s the weirdest dream you’ve ever had?",
    "What’s the most childish thing you still do?",
    "If you could swap lives with anyone for a day, who would it be?",
    "What’s the most useless talent you have?",
    "What’s the biggest secret you’ve kept from your parents?",
    "What’s one thing you would change about yourself?",
    "Have you ever pretended to be sick to get out of something?",
    "What’s the worst date you’ve ever been on?",
    "What’s the most bizarre thing you’ve ever eaten?",
    "If you had to delete one app from your phone, which one would it be?",
    "What’s your guilty pleasure TV show?",
    "Have you ever eavesdropped on a conversation?",
    "What’s the craziest thing you’ve done on a dare?",
    "What’s the most awkward thing that’s ever happened to you in public?"
];

async function truthCommand(sock, chatId) {
    const randomTruth = truths[Math.floor(Math.random() * truths.length)];
    await sock.sendMessage(chatId, { text: `🔮 Truth: ${randomTruth}` });
}

module.exports = { truthCommand };
