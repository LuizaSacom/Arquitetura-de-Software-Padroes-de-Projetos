import FormaterHTML from './FormaterHTML.js';
import FormaterTXT from './FormaterTXT.js';
import FormaterXML from './FormaterXML.js';
import FormaterJSON from './FormaterJSON.js';
import FormaterCSV from './FormaterCSV.js';
import FormaterYAML from './FormaterYAML.js';

class FormaterFactory {
  static createFormater(type) {
    switch (type) {
      case 'html':
        return new FormaterHTML();
      case 'txt':
        return new FormaterTXT();
      case 'xml':
        return new FormaterXML();
      case 'json':
        return new FormaterJSON();
      case 'csv':
        return new FormaterCSV();
      case 'yaml':
        return new FormaterYAML();
      default:
        throw new Error(`Formato de saída "${type}" não é suportado.`);
    }
  }
}

export default FormaterFactory;
