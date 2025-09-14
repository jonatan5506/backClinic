# 🏥 Sistema de Gestão de Clínicas Médicas — **back-clinicas**

Este projeto tem como objetivo estudar **boas práticas** no desenvolvimento de uma **API RESTful**.  
É um sistema **backend** para gestão de clínicas médicas, permitindo o gerenciamento de **médicos**, **especialidades** e **usuários**.  

A aplicação é construída com **arquitetura robusta e escalável**, utilizando tecnologias modernas para garantir alta performance e manutenibilidade. 🚀

---

## ⚙️ Tecnologias Utilizadas

- **TypeScript** → Tipagem estática para maior segurança no código.  
- **NestJS** → Framework modular para APIs escaláveis.  
- **PostgreSQL** → Banco de dados relacional confiável.  
- **Docker & Docker Compose** → Containerização e ambiente replicável.  
- **TypeORM** → ORM para manipulação de dados com abstração.  

---

## 📦 Pré-requisitos

Antes de começar, instale na sua máquina:

- [Node.js](https://nodejs.org/) (v18 ou superior)  
- [Docker](https://www.docker.com/)  
- [Docker Compose](https://docs.docker.com/compose/)  

---

## 🚀 Como Executar o Projeto

### 1️⃣ Clonar o Repositório
```bash
git clone https://github.com/jonatan5506/backClinic.git
cd back-clinicas
```

### 2️⃣ Iniciar o Banco de Dados (Docker)
```bash
docker-compose up -d
```

### 3️⃣ Instalar as Dependências
```bash
npm install
```

### 4️⃣ Rodar a Aplicação em Desenvolvimento
```bash
npm run start:dev
```

A API estará disponível em:  
👉 [http://localhost:3000](http://localhost:3000)

---

## 📂 Estrutura do Projeto

```plaintext
back-clinicas
├─ README.md
├─ docker-compose.yaml
├─ nest-cli.json
├─ package.json
├─ src
│  ├─ app.module.ts
│  ├─ config/
│  ├─ especialidades/
│  ├─ filtros/
│  ├─ medico/
│  ├─ seeds/
│  └─ usuario/
├─ test/
└─ tsconfig.json
```

Organizado em **módulos e funcionalidades**, seguindo convenções do **NestJS**.

---

## 🧑‍⚕️ Cenário de Utilização

- Cadastro e gerenciamento de **médicos** e suas **especialidades**.  
- Secretárias/equipe administrativa podem **gerenciar usuários**.  
- Possibilidade de integração com frontend para **agendamento online** de consultas.  

---

## 📌 Roadmap de Desenvolvimento

### 🔨 Em andamento
- [ ] CRUDs completos para Médicos, Especialidades e Usuários  
- [ ] Middleware Global de Erros (Exception Filter)  
- [ ] Validação avançada de dados (CPF, CRM via API externa)  

### ☁️ Futuro (AWS)
- [ ] Deploy em produção na AWS  
- [ ] VPC para isolar recursos  
- [ ] EC2 para instâncias de backend  
- [ ] RDS PostgreSQL seguro  
- [ ] Autenticação & Autorização  

---

## 📜 Licença

Este projeto está sob a **Licença MIT**.  
Sinta-se livre para usar, modificar e compartilhar!  

---

👨‍💻 Desenvolvido por [Jonatan Andrade](https://github.com/jonatan5506)  
