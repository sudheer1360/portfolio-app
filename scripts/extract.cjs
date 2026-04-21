const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('Thadikonda_Sudheer_Resume.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('resume.txt', data.text);
    console.log("Extraction done.");
}).catch(console.error);
