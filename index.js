import fs from 'node:fs';
import inquirer from 'inquirer';
import CitiesReporter from './src/CitiesReporter.js';
import FormaterFactory from './src/FormaterFactory.js';
import JSONFileReader from './src/JSONFileReader.js';
import XMLFileReader from './src/XMLFileReader.js';
import YAMLFileReader from './src/YAMLFileReader.js';
import CSVFileReader from './src/CSVFileReader.js';

const filename = './data/cidades-2.json';

const fileChoices = ['JSON', 'XML', 'CSV', 'YAML'];
const formatChoices = ['html', 'txt', 'xml', 'json', 'csv', 'yaml'];

const fileReaderStrategies = {
  'json': new JSONFileReader(),
  'xml': new XMLFileReader(),
  'csv': new CSVFileReader(),
  'yaml': new YAMLFileReader(),
};

inquirer
  .prompt([
    {
      type: 'list',
      name: 'fileType',
      message: 'Escolha o tipo de arquivo a ser lido:',
      choices: fileChoices,
    },
    {
      type: 'list',
      name: 'formatType',
      message: 'Escolha o formato de saída desejado:',
      choices: formatChoices,
    },
  ])
  .then((answers) => {
    const fileType = answers.fileType.toLowerCase();
    const formatType = answers.formatType.toLowerCase();
    const inputFormat = filename.split('.').pop();
    if (inputFormat !== fileType) {
      console.error(`O formato de entrada do arquivo não corresponde à extensão do arquivo (${inputFormat}). Por favor, escolha novamente.`);
    } else {
      try {
        const formater = FormaterFactory.createFormater(formatType);
        const fileReader = fileReaderStrategies[fileType];
        const reporter = new CitiesReporter({ formaterStrategy: formater });
        const cities = fileReader.read(filename);
        const output = reporter.report(cities);
        console.log(output);
      } catch (error) {
        console.error('Um erro ocorreu:', error.message);
      }
    }
  });