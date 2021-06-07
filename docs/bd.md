# Introdução a Base de Dados

## 1. Noções básicas de base de dados

### 1.1 Dados

São os elementos básicos pertencentes a um conjunto determinado de informações.

### 1.2 Informação

É o resultado da aplicação de um conjunto de operações sobre os dados.

### 1.3 Base de dados

São arquivos ou sistemas com uma estrutura regular que organizam informações. Essas estruturas podem ter a forma de uma tabela, onde cada tabela é composta por linhas e colunas.

Em sistemas computacionais, bases de dados são gerenciadas por um sistema gerenciador de base de dados, ou SGBD. A apresentação dos dados pode ser semelhante à de uma planilha eletrônica, porém os sistemas de gestão de base de dados possuem características especiais para o armazenamento, classificação e recuperação dos dados.

#### 1.3.1 Sistema de gerenciamento ed base de dados (SGBD)

É um software com recursos específicos para facilitar a gerenciamento de dados em bases de dados, como exemplo: Oracle, MySQL, SQL Server, etc…

#### 1.3.2 Database Administrator (DBA)

É a pessoa que cria e  gere a base de dados. O administrador da base de dados, pode não ser um programador.

#### 1.3.3 Características de uma Base de Dados

Uma base de dados deve ter basicamente as seguintes características:
- Ser não redundante, não ter duplicidades de informações;
- Ser independente dos programas;
- Ser utilizável por  todos os programas;
- Incluir todas as inter-relações de dados que forem necessárias;
- Possuir um método comum de recuperar, inserir e corrigir os dados de banco.

#### 1.3.4 Vantagens do uso de uma Base de Dados
Para qualquer instituição, o mais importante, não é ter todos os materiais físicos bem controlados, mas sim, ter um controle rigoroso nos dados que controlam os meios físicos.

Dentre as grandes vantagens em usar uma base de dados, destacam-se as seguintes:
- Diminuir o espaço ocupado pela informação;
- Facilitar o acesso e a atualização da informação;
- Aumentar a velocidade da pesquisa;
- Evitar a redundância da informação;
- Facilitar o backup e recuperação à falhas;
- Fortificar a partilha de dados.

### 1.4 Fases para a construção de uma base de Dados

Ao criarmos uma base de dados num SGBD, antes devemos ter em conta alguns procedimentos, procedimentos estes que facilitarão o desenho, bem como a estrutura da base de dados.

Para construirmos eficientemente uma base dados recomenda-se as seguintes fase:
- Análise Dos Requisitos
- Modelo Conceptual
- Modelo Lógico
- Modelo Físico

**Análise de requisitos**: nesta fase, devemos como DBA identificar ou descrever os dados/informações e processos pretendidos pela organização;

**Modelo conceptual**: nesta fase, nos baseamos na  representação da realidade, sem termos em conta os aspectos técnicos, ou seja, nesta fase não importa ainda a tecnologia ou o tipo de banco de dados a se utilizar;

**Modelo lógico**: esta fase agrega mais detalhes sobre a implementação da base de dados. Nesta da fase transformamos o modelo conceptual em um modelo que fica muito próximo ao modelo físico da base de dados;

**Modelo físico**: este modelo consiste em definir estruturas físicas de dados que sejam mais adequadas num ambiente informático particular. 

#### 1.4.1 Análise de requisitos

Na fase de análise de requisitos devemos ter o grande foco em obter as:
- Informações que descrevem as estruturas de dados, tais como as entidades, atributos e as associações;
- Informação que descreva as regras ou restrições que preservem a integridade dos dados;
- Informação acerca dos processos operacionais e de gestão necessários ao negócio da organização;
- Informações das necessidades e requisitos dos utilizadores.

Existem vários métodos ou técnicas para levantamento de requisitos, as mais conhecidas são:
- Documentação;
- Observação;
- Entrevista.

Os principais elementos do modelo conceptual são:
- Entidade;
- Atributo;
- Associação;
- Entidade Associativa;
- Generalização.
