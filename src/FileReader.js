import fs from 'node:fs';

export default class FileReader {
  static read(filename) {
    return fs.readFileSync(filename);
  }
  static parseJSON(data) {
    return JSON.parse(data);
  }
}