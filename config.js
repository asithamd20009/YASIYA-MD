const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lUIgGQ6C#E0KhIit3tgEb0BM1ZviUISQcuAA1Ul6cr1k3c4_mHbo'
};
