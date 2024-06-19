import fs from 'node:fs';
import { parse } from 'csv-parse/sync'; // Importa a função parse do módulo csv-parse/sync
import FileReaderAdapter from './FileReaderAdapter.js';

export default class CSVFileReader extends FileReaderAdapter {
  read(filename) {
    const data = fs.readFileSync(filename, 'utf8');
    return parse(data, {
      columns: true,
      skip_empty_lines: true,
    });
  }
}