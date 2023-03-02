const util = require('util');
const fs = require('fs');

const fileRead = util.promisify(fs.readFile);

const fileWrite = (destination, content) => {
    fs.writeFileSync(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nNew data ${destination}`)
    );
};

const readAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const dataParsed = JSON.parse(data);
            parsedData.push(content);
            fileWrite(file, dataParsed);
        }
    });
};

module.exports = { fileRead, fileWrite, readAppend};