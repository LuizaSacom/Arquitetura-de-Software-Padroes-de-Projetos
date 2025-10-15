##📚 Projeto de Arquitetura de Software – Formatador e Leitor de Arquivos de Cidades

Projeto desenvolvido para fins educacionais, com o objetivo de praticar os conhecimentos adquiridos nas aulas de arquitetura de Software.

Este projeto demonstra a aplicação de padrões de projeto (Design Patterns) e princípios SOLID em uma arquitetura modular.
O sistema é capaz de ler arquivos de diferentes formatos (JSON, XML, CSV, YAML) e gerar relatórios de cidades em múltiplos formatos de saída (HTML, TXT, JSON, XML, CSV, YAML).

**🎯 Objetivo do Projeto**

Aplicar conceitos de arquitetura de software orientada a objetos, utilizando os padrões criacionais (Factory Method), padrões estruturais (Adapter), padrões comportamentais (Strategy) e princípios SOLID (SRP, OCP, DIP).

**📑 Padrões de Projeto Utilizados**

*Factory Method – FormaterFactory*

Descrição: Cria instâncias de diferentes formatadores (HTML, TXT, CSV, JSON, XML, YAML) com base em uma string de tipo.

Motivação: Esse padrão foi escolhido para centralizar a lógica de criação dos objetos formatadores, permitindo fácil extensão para novos formatos de saída sem alterar o código existente.

*Adapter – FileReaderAdapter*

Descrição: O padrão Adapter converte a interface de uma classe em outra interface que um cliente deseja. Ele permite que classes com interfaces incompatíveis trabalhem juntas.

Implementação: CSVFileReader, JSONFileReader, XMLFileReader e YAMLFileReader estendem FileReaderAdapter.

Motivação: Esse padrão foi utilizado para permitir que diferentes leitores de arquivos sejam tratados de forma uniforme, independente do formato do arquivo, facilitando a integração com o restante do sistema.

*Strategy – FormaterStrategy*

Descrição: Define uma família de algoritmos, encapsula cada um deles e os torna intercambiáveis. O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.

Implementação: CitiesReporter utiliza uma instância de AbstractFormater para definir a estratégia de formatação.

Motivação: Esse padrão foi escolhido para permitir a formatação dos dados de diferentes maneiras, sem que o CitiesReporter precise conhecer os detalhes de cada formato.

**🧱 Princípios SOLID Aplicados**

*SRP (Single Responsibility Principle)*

Refatoração: Cada classe possui uma única responsabilidade. As classes de formatação são responsáveis apenas por formatar os dados e as classes de leitura de arquivos são responsáveis apenas por ler e processar arquivos.

Exemplo: CSVFileReader é responsável apenas por ler arquivos CSV e FormaterCSV é responsável apenas por formatar dados como CSV.

*OCP (Open/Closed Principle)*

Refatoração: O código foi modificado para ser aberto para extensão, mas fechado para modificação. Novos formatadores podem ser adicionados sem modificar o código existente, apenas estendendo AbstractFormater e adicionando a lógica de formatação.

Exemplo: A classe FormaterFactory permite adicionar novos tipos de formatadores sem precisar modificar os métodos da fábrica ou das classes de formatação existentes.

*DIP (Dependency Inversion Principle)*

Refatoração: O CitiesReporter agora depende de abstrações (AbstractFormater e FileReaderAdapter) em vez de classes concretas, tornando o sistema mais flexível e testável.

Exemplo: CitiesReporter recebe a instância de um AbstractFormater na construção, permitindo o uso de diferentes estratégias de formatação.

**⚙️ Instruções para rodar o projeto**

Instale as dependências do projeto: npm install

Rodar o projeto principal: node index.js
