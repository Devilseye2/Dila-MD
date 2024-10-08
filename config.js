const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TBUx3QhK#puoEfDzkor4a4rkFqiL8GJgCUor4CRUfA_ncp_vkBfE",
MONGODB: process.env.MONGODB || "",
};
