import fs from 'node:fs';
import yaml from 'js-yaml';
import FileReaderAdapter from './FileReaderAdapter.js';

export default class YAMLFileReader extends FileReaderAdapter {
  read(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return yaml.load(data);
  }
}