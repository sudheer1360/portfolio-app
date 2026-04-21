import fs from 'fs';
import PDFParser from 'pdf2json';

const pdfParser = new PDFParser(this, 1);

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync('./resume.txt', pdfParser.getRawTextContent().replace(/\r\n/g, "\n"));
    console.log("Done");
});

pdfParser.loadPDF("./Thadikonda_Sudheer_Resume.pdf");
