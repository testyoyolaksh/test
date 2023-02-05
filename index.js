const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async (message) => {
    const from = message.from;
    const chat = await message.getChat();
    setTimeout(() => {
        console.log('user number', from);
        console.log('group id', chat?.groupMetadata?.id?._serialized);
    }, 2000);
});

client.initialize();
