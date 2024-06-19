import fs from 'node:fs';
import xml2js from 'xml2js';
import FileReaderAdapter from './FileReaderAdapter.js';

export default class XMLFileReader extends FileReaderAdapter {
  read(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    let result;
    xml2js.parseString(data, (err, parsedData) => {
      if (err) {
        throw new Error('Error parsing XML');
      }
      result = parsedData;
    });
    return result;
  }
}