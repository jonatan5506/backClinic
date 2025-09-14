Sistema de Gestão de Clínicas Médicas (back-clinicas)
Estou criando este projeto para estudar as boas práticas no desenvolvimento de uma Apirestful. Trata-se de um sistema backend desenvolvido para a gestão de clínicas médicas, permitindo o gerenciamento de médicos, especialidades e usuários. A aplicação é construída com uma arquitetura robusta e escalável, utilizando tecnologias modernas para garantir alta performance e manutenibilidade.

Tecnologias Utilizadas
TypeScript: Linguagem principal do projeto, adicionando tipagem estática e facilitando a detecção de erros.

NestJS: Framework de backend modular e escalável para a criação de APIs.

PostgreSQL: Banco de dados relacional robusto e confiável para armazenamento de dados.

Docker & Docker Compose: Utilizados para containerização do banco de dados, garantindo um ambiente de desenvolvimento isolado e replicável.

TypeORM: ORM (Object-Relational Mapper) para interagir com o banco de dados de forma orientada a objetos.

Pré-requisitos
Para executar este projeto, você precisará ter o seguinte instalado em sua máquina:

Node.js (versão 18 ou superior)

Docker

Docker Compose

Como Executar o Projeto
Siga os passos abaixo para colocar a aplicação em funcionamento em seu ambiente de desenvolvimento.

1. Clonar o Repositório
git clone [https://github.com/jonatan5506/backClinic.git](https://github.com/jonatan5506/backClinic.git)
cd back-clinicas

2. Iniciar o Banco de Dados com Docker
Utilize o Docker Compose para iniciar o container do PostgreSQL. Isso garantirá que o banco de dados esteja pronto para uso.

docker-compose up -d

3. Instalar as Dependências
Instale todas as dependências do projeto usando o npm.

npm install

4. Executar a Aplicação
Inicie a aplicação em modo de desenvolvimento. Ela será reiniciada automaticamente ao detectar mudanças no código-fonte.

npm run start:dev

A API estará acessível em http://localhost:3000.

Estrutura do Projeto
A estrutura do projeto segue as convenções do NestJS, organizada por módulos e funcionalidades para facilitar a navegação e o desenvolvimento.

back-clinicas
├─ README.md
├─ docker-compose.yaml
├─ nest-cli.json
├─ package-lock.json
├─ package.json
├─ src
│  ├─ app.module.ts
│  ├─ config
│  │  └─ postgres.config.service.ts
│  ├─ especialidades
│  │  ├─ dto
│  │  │  ├─ atualiza.especialidade.dto.ts
│  │  │  ├─ cria.especialidade.dto.ts
│  │  │  └─ especialidades.response.dto.ts
│  │  ├─ especialidades.medico.controller.ts
│  │  ├─ especialidades.medico.module.ts
│  │  ├─ especialidades.medico.repository.ts
│  │  ├─ especialidades.medico.service.ts
│  │  └─ especilidades.medico.entity.ts
│  ├─ filtros
│  │  └─ filtro-excecao-global.ts
│  ├─ main.ts
│  ├─ medico
│  │  ├─ dto
│  │  │  ├─ atualiza.medico.dto.ts
│  │  │  ├─ cria.medico.dto.ts
│  │  │  └─ medico.respose.dto.ts
│  │  ├─ medico.controller.ts
│  │  ├─ medico.entity.ts
│  │  ├─ medico.module.ts
│  │  ├─ medico.repository.ts
│  │  └─ medico.service.ts
│  ├─ seeds
│  │  ├─ especialidade.medico.seed.ts
│  │  ├─ medicos.seed.ts
│  │  ├─ seeder.module.ts
│  │  └─ seeder.ts
│  └─ usuario 
│     ├─ dto
│     │  ├─ AtualizaUsuario.dto.ts
│     │  ├─ CriaUsuario.dto.ts
│     │  └─ ListaUsuario.dto.ts
│     ├─ enums
│     │  └─ tipo.usuario.enum.ts
│     ├─ usuario.controller.ts
│     ├─ usuario.entity.ts
│     ├─ usuario.module.ts
│     ├─ usuario.repository.ts
│     ├─ usuario.service.ts
│     └─ validacao
│        └─ email-eh-unico.validator.ts
├─ test
│  └─ jest-e2e.json
├─ tsconfig.build.json
└─ tsconfig.json

Cenário de Utilização
Este backend foi projetado para ser a espinha dorsal de um sistema de agendamento e gestão para clínicas médicas.

Um médico pode ter seus dados e especialidades cadastrados, enquanto a secretária ou a equipe administrativa pode gerenciar o cadastro de usuários e atualizar informações. A aplicação também pode ser usada para um sistema de agendamento online, onde pacientes interagem com um front-end que consome esta API para buscar médicos por especialidade e marcar consultas.

Recursos em Desenvolvimento:

(Roadmap Dev)

TODO CRUDS completos: Finalização das operações de criação, leitura, atualização e exclusão para todas as entidades (Médicos, Especialidades e Usuários).

TODO Middleware de Erros: Implementação de um Global Exception Filter para tratamento centralizado de erros e respostas padronizadas da API.

TODO Validação de Dados: Validação de unicidade para dados sensíveis, como CPF e CRM de médicos(Api externa).

(Roadmap AWS)

Deploy para Produção na AWS: Configuração de uma arquitetura segura e escalável na AWS.

VPC: Criação de uma nuvem privada virtual para isolar os recursos.

EC2: Instalação e configuração de instâncias do EC2 para o serviço web.

RDS: Configuração do banco de dados PostgreSQL na AWS, acessível apenas pelo serviço web para maior segurança.

Implementação de Autenticação e Autorização.

Licença
Este projeto está licenciado sob a Licença MIT.

```