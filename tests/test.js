import assert from 'assert';
import FormaterFactory from '../src/FormaterFactory.js';
import CitiesReporter from '../src/CitiesReporter.js';
import JSONFileReader from '../src/JSONFileReader.js';

// Função de utilidade para carregar dados de teste
function loadTestData(filename) {
  const fileReader = new JSONFileReader();
  return fileReader.read(filename);
}

// Teste para verificar a saída em HTML
function testHTMLFormat() {
  const formater = FormaterFactory.createFormater('html');
  const reporter = new CitiesReporter({ formaterStrategy: formater });
  const cities = loadTestData('./data/cidades-2.json');
  const output = reporter.report(cities);
  assert(output.includes('<h1>Relatório de Nomes de Cidades</h1>'), 'HTML output should contain the header');
}

// Teste para verificar a saída em TXT
function testTXTFormat() {
  const formater = FormaterFactory.createFormater('txt');
  const reporter = new CitiesReporter({ formaterStrategy: formater });
  const cities = loadTestData('./data/cidades-2.json');
  const output = reporter.report(cities);
  assert(output.includes('Relatório de Nomes de Cidades'), 'TXT output should contain the header');
}

// Teste para verificar a saída em JSON
function testJSONFormat() {
  const formater = FormaterFactory.createFormater('json');
  const reporter = new CitiesReporter({ formaterStrategy: formater });
  const cities = loadTestData('./data/cidades-2.json');
  const output = reporter.report(cities);
  assert(typeof JSON.parse(output) === 'object', 'JSON output should be a valid JSON');
}

// Teste para verificar a saída em CSV
function testCSVFormat() {
  const formater = FormaterFactory.createFormater('csv');
  const reporter = new CitiesReporter({ formaterStrategy: formater });
  const cities = loadTestData('./data/cidades-2.json');
  const output = reporter.report(cities);
  assert(output.includes('Nome'), 'CSV output should contain the header');
}

// Executar os testes
try {
  testHTMLFormat();
  testTXTFormat();
  testJSONFormat();
  testCSVFormat();
  console.log('All tests passed!');
} catch (error) {
  console.error('Test failed:', error.message);
}

//node tests/test.js (Para executar o script de test)
