import fs from 'node:fs';
import FileReaderAdapter from './FileReaderAdapter.js';

export default class JSONFileReader extends FileReaderAdapter {
  read(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return JSON.parse(data);
  }
}