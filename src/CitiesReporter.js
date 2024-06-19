import FileReader from './FileReader.js';
import AbstractFormater from './AbstractFormater.js';

export default class CitiesReporter {
  constructor({ formaterStrategy }) {
    if (!(formaterStrategy instanceof AbstractFormater)) {
      throw new Error('formaterStrategy must be an instance of AbstractFormater');
    }
    this._formaterStrategy = formaterStrategy;
  }

  report(data) {
    let cities;
    if (typeof data === 'string') {
      const fileData = FileReader.read(data);
      cities = FileReader.parseJSON(fileData);
    } else {
      cities = data; // Direct data (e.g., JSON from YAML)
    }
    return this._formaterStrategy.output(cities);
  }
}