require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

// Start Command
bot.start((ctx) => {
    ctx.reply('Welcome to SDU Event Bot! Choose your role:', {
        reply_markup: {
            keyboard: [
                ['🎓 Student', '🏫 Club Head', '👨‍🏫 Teacher']
            ],
            resize_keyboard: true
        }
    });
});

// Launch the bot
bot.launch();

console.log('Bot is running...');
