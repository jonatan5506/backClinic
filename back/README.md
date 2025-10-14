# 🚀 NESTJS Task Manager API

## Visão Geral do Projeto

Este projeto é uma **API de Gerenciamento de Tarefas** (CRUD de `Task` e `User`) desenvolvida com o objetivo principal de aprofundar os estudos no **framework NestJS**. A arquitetura foca na utilização de conceitos como **Módulos**, **Serviços**, **Controladores**, **DTOs** (Data Transfer Objects), **TypeORM** para persistência e **Guards** para segurança e autenticação.

O foco principal foi a implementação de:

* **Autenticação JWT** (JSON Web Tokens) com *Guards* globais.
* **Validação de Dados** utilizando `class-validator` e `class-transformer`.
* Estrutura de *migrations* para controle de esquema do **PostgreSQL**.

---

## 🛠️ Tecnologias e Ferramentas

| Categoria | Tecnologia | Função no Projeto |
| :--- | :--- | :--- |
| **Backend** | **NestJS** | Framework Node.js para construção da API. |
| **Linguagem** | **TypeScript** | Superset do JavaScript com tipagem estática. |
| **Banco de Dados** | **PostgreSQL** | Sistema de gerenciamento de banco de dados relacional. |
| **ORM** | **TypeORM** | Mapeamento Objeto-Relacional para interagir com o PostgreSQL. |
| **Containers** | **Docker Compose** | Usado para configurar e orquestrar o ambiente local do banco de dados. |
| **Implantação** | **AWS EC2** | Plataforma de *hosting* onde o projeto pode ser executado. |

---

## 📦 Dependências Chave

O projeto utiliza bibliotecas essenciais para manter a qualidade do código e a segurança dos dados.

| Dependência | Propósito | Detalhes |
| :--- | :--- | :--- |
| **`class-validator`** | **Validação de Entradas** | Permite definir regras de validação (tamanho, formato, tipo) usando decoradores em DTOs. O NestJS utiliza um **`ValidationPipe`** global para aplicar estas regras automaticamente. |
| **`class-transformer`** | **Transformação de Dados** | Usado para converter *plain objects* (JSON) em instâncias de classes e vice-versa. É crucial para **excluir campos sensíveis** (como senhas) nas respostas ou transformar tipos de dados. |
| **`@nestjs/jwt`** | **Autenticação (JWT)** | Implementa o uso de **JSON Web Tokens** para verificar a identidade do usuário. O token gerado deve ser enviado em todas as requisições protegidas. |

nestjs
└─
  ├─ .env
   ├─ .env.example
   ├─ docker-compose.yml
   ├─ src
   │  ├─ app.module.ts
   │  ├─ auth              # Lógica de Autenticação (Login, JWT)
   │  │  └─ auth.guard.ts  
   │  ├─ db                # Configuração do TypeORM
   │  │  └─ migrations     # Arquivos de schema e seed (inclui SeedAdminUser)
   │  ├─ decorators        # Decoradores customizados (ex: @Public)
   │  ├─ main.ts           # Ponto de entrada e pipes globais
   │  ├─ task              # Módulo CRUD de Tarefas
   │  │  └─ dto
   │  ├─ users             # Módulo CRUD de Usuários
   │  │  └─ dto
   │  └─ ...
   └─ ...
 




### Configuração Global de Pipes

O uso do `class-validator` e `class-transformer` é habilitado globalmente em `main.ts` através do **`ValidationPipe`**:







```typescript
// main.ts
// Aplica o pipe de validação em todos os endpoints
app.useGlobalPipes(new ValidationPipe());

// app.module.ts
providers: [
  // Aplica AuthGuard globalmente
  {
    provide: APP_GUARD,
    useClass: AuthGuard,
  },
],

// users.module.ts
// Deixa a entidade disponivel para o TypeORM
imports: [TypeOrmModule.forFeature([UserEntity])],



********************************************************************

// Importa o decorador @Module, essencial para definir um módulo no NestJS.
import { Module } from '@nestjs/common';
// Importa o AuthController, que lida com as requisições HTTP (rotas de login).
import { AuthController } from './auth.controller';
// Importa o módulo de usuários. O AuthModule precisa dele para validar as credenciais do usuário durante o login.
import { UsersModule } from '../users/users.module.js';
// Importa o JwtModule e os módulos de configuração necessários.
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';

// O decorador @Module define a estrutura deste módulo.
@Module({
  // A propriedade 'imports' lista outros módulos de que este módulo precisa.
  imports: [
    // Importa o módulo de configuração.
    // É obrigatório para que o 'registerAsync' do JwtModule consiga injetar o ConfigService.
    ConfigModule,

    // Configura o módulo JWT de forma assíncrona.
    // Isso permite injetar dependências (como o ConfigService) para buscar variáveis de ambiente.
    JwtModule.registerAsync({
      // Indica qual serviço deve ser injetado para obter a configuração.
      inject: [ConfigService],

      // Função de fábrica usada para construir a configuração do JwtModule.
      // Ela recebe o ConfigService injetado como argumento.
      useFactory: (configService: ConfigService) => {
        // As linhas abaixo são comentários de debug (comentadas) que você usou.
        // Elas mostrariam o valor das variáveis de ambiente no console.
        // console.log('JWT_SECRET ->', configService.get<string>('JWT_SECRET'));
        /* console.log(
          'JWT_EXPIRATION_TIME ->',
          configService.get<number>('JWT_EXPIRATION_TIME'),
        );  */ // debug

        // Retorna o objeto de configuração do JWT.
        return {
          // Define a chave secreta (secret) usada para assinar/verificar tokens.
          // Busca o valor de 'JWT_SECRET' no .env ou usa um 'fallback-secret' (não recomendado em produção).
          secret: configService.get<string>('JWT_SECRET') /* || 'fallback-secret' */,

          // Opções para a assinatura do token.
          signOptions: {
            // Define o tempo de expiração (expiresIn) do token.
            // Busca o valor de 'JWT_EXPIRATION_TIME' (em segundos) ou usa 7200s (2 horas) como padrão.
            // O `${...}s` é usado para garantir que o tempo de expiração seja lido como segundos.
            expiresIn: `${configService.get<number>('JWT_EXPIRATION_TIME') ?? 7200}s`,
          },
        };
      },
    }),

    // O UsersModule é importado para que o AuthService possa acessar o UsersService
    // (e suas funcionalidades, como encontrar um usuário por login/senha) durante a tentativa de login.
    UsersModule,
  ],

  // A propriedade 'controllers' registra todos os controladores que pertencem a este módulo.
  // Neste caso, o AuthController contém as rotas como /auth/login.
  controllers: [AuthController],

  // A propriedade 'providers' registra os serviços e outras classes que podem ser injetadas.
  // O AuthService contém a lógica de negócios para autenticação (comparar senhas, gerar o token, etc.).
  providers: [AuthService],
})
// Define a classe do módulo. O nome da classe deve terminar em 'Module' por convenção.
export class AuthModule {}


***********************************************************************************

import {
  CanActivate, // Interface que o Guard deve implementar (possui o método canActivate).
  ExecutionContext, // Objeto que fornece acesso ao contexto da requisição (HTTP, WebSocket, etc.).
  Injectable, // Permite que a classe seja injetada e injete dependências.
  UnauthorizedException, // Exceção HTTP 401, usada para bloquear o acesso.
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config'; // Serviço para ler variáveis de ambiente (JWT_SECRET).
import { JwtService } from '@nestjs/jwt'; // Serviço para verificar a validade do token.
import { Request } from 'express'; // Tipagem base do objeto de requisição.
import { Reflector } from '@nestjs/core'; // Usado para ler metadados de decoradores (como o @Public()).
import { UserEntity } from '../users/entities/user.entity'; // Entidade do usuário para tipagem.
import { IS_PUBLIC_KEY } from '../decorators/public.decorator'; // Chave de metadado que marca rotas públicas.

// Estende a interface base do Request para incluir o objeto 'user'
// depois que o token for decodificado.
interface RequestWithUser extends Request {
  user: UserEntity;
}

@Injectable()
export class AuthGuard implements CanActivate {
  // O constructor injeta os serviços necessários.
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly reflector: Reflector,
  ) {}

  // O método principal que decide se a requisição pode prosseguir.
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // 1. Checa rotas públicas
    
    // Tenta ler o metadado IS_PUBLIC_KEY na função (handler) e na classe.
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(), // Verifica se está no método do controller
      context.getClass(), // Verifica se está no controller inteiro
    ]);
    
    // Se a rota for marcada como pública, o Guard é ignorado e o acesso é permitido.
    if (isPublic) return true;

    // 2. Extrai Request e Token
    
    // Obtém o objeto Request e o tipa corretamente (incluindo 'user').
    const request = context.switchToHttp().getRequest<RequestWithUser>();
    
    // Extrai o token do cabeçalho de autorização.
    const token = this.extractTokenFromHeader(request);

    // Se o token não existir (cabeçalho vazio ou mal formatado), lança 401.
    if (!token) {
      throw new UnauthorizedException('Token não fornecido.');
    }

    // 3. Verifica Token
    try {
      // Obtém a chave secreta de forma síncrona do .env.
      const secret = this.configService.getOrThrow('JWT_SECRET')!;
      
      // Verifica o token usando a chave secreta. Isso também valida a expiração.
      const payload = await this.jwtService.verifyAsync(token, {
        secret,
      });

      // Anexa o payload (o objeto do usuário) à requisição.
      // Agora, outros serviços e controllers podem acessar 'request.user'.
      request.user = payload;
      
    } catch {
      // Se a verificação falhar (expirado, modificado, etc.), lança 401.
      throw new UnauthorizedException('Token inválido.');
    }

    // 4. Conexão Autorizada
    
    // Se tudo estiver OK, permite que a requisição siga para o Controller.
    return true;
  }

  // Método de Extração: Pega o token no formato "Bearer token".
  private extractTokenFromHeader(request: Request): string | undefined {
    // Divide o cabeçalho 'Authorization' em [tipo, token].
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    
    // Retorna o token apenas se o tipo for "Bearer".
    return type === 'Bearer' ? token : undefined;
  }
}


************************************************************************************


# NESTJS

Projeto criado com intuito de estudar o framewok nestjs, modulos,decorators...

utilizei 

Node.js
Nestjs
Typescritp
Aws ec2
Postgresql
typeorm


Class-transformer - Ia deve explicar
Class validator - Ia deve explicar
jwt - Ia deve explicar


nestjs
└─ curso-nest
   ├─ .env
   ├─ .env.example
   ├─ .prettierrc
   ├─ README.md
   ├─ docker-compose.yml
   ├─ eslint.config.mjs
   ├─ nest-cli.json
   ├─ package-lock.json
   ├─ package.json
   ├─ src
   │  ├─ app.module.ts
   │  ├─ app.service.ts
   │  ├─ auth
   │  │  ├─ auth.controller.ts
   │  │  ├─ auth.guard.ts
   │  │  ├─ auth.module.ts
   │  │  ├─ auth.service.ts
   │  │  └─ dto
   │  │     └─ auth.response.dto.ts
   │  ├─ db
   │  │  ├─ db.module.ts
   │  │  ├─ entities
   │  │  ├─ migrations
   │  │  │  ├─ 1759517775476-task-table.ts
   │  │  │  ├─ 1759517810637-user-table.ts
   │  │  │  └─ 1759532024820-SeedAdminUser.ts
   │  │  └─ typeOrm.migration-config.ts
   │  ├─ decorators
   │  │  └─ public.decorator.ts
   │  ├─ main.ts
   │  ├─ task
   │  │  ├─ dto
   │  │  │  ├─ create-task.dto.ts
   │  │  │  ├─ response-task.dto.ts
   │  │  │  └─ update-task.dto.ts
   │  │  ├─ entities
   │  │  │  └─ task.entity.ts
   │  │  ├─ enum
   │  │  │  └─ task.enum.ts
   │  │  ├─ task.controller.ts
   │  │  ├─ task.module.ts
   │  │  └─ task.service.ts
   │  └─ users
   │     ├─ dto
   │     │  ├─ create-user.dto.ts
   │     │  └─ update-user.dto.ts
   │     ├─ entities
   │     │  └─ user.entity.ts
   │     ├─ users.controller.ts
   │     ├─ users.module.ts
   │     └─ users.service.ts
   ├─ tsconfig.build.json
   └─ tsconfig.json

- nest g res task

Projeto utiliza Guards em todas as rotas, exceto na rota de Login - TODO retirar Guards da rota Cria usuário 
1º realizo Login
usuario padrão 
admin
admin

2º pego o token e coloco em
 - Autorization
 - barer token

 para realizar as demais ações do crud

 ## Validações

 - npm i class-validator class-transformer

 ## Typeorm
 - npm i typeorm @nestjs/typeorm
 - instalar pacote do db - npm i pg
 - criar docker-compose.yml
 - criar modulo db
 - instalar dotenv para usar na migration - npm i dotenv
 - passar atributo name ao criar migration - npm run migration:create -name=task-table

 OBS: Antes de primeiro login, rodar as migrations para criar o usuário "admin".

começar falando do 
main

//Para usar o Class-transformer e Class-validator
  app.useGlobalPipes(new ValidationPipe());

appModule

 // Aplica AuthGuard globalmente
   provide: APP_GUARD,
   useClass: AuthGuard,

usermodule
//Deixa a entidade disponivel para o typeorm
  imports: [TypeOrmModule.forFeature([UserEntity])],

postgresql://postgres:postgres@natandevdb.duckdns.org:5432/db_task

OBS:
* Comando para verificar criação de db: docker exec -it postgres_db psql -U postgres -l


//TASKS
- rota signUp ok
- rota signIn ok

//TODO
- implementar login com google
  - npm install @nestjs/passport passport passport-google-oauth20
  - npm install --save-dev @types/passport-google-oauth20

  - login com Google / verificar credenciais .env
    # tem que adicionar a URL do front "http://localhost:5173/" na criação das credenciais
    e a Url: http://localhost:8000/auth/google/callback na credencial url de redirecionameto

  deu esse erro no back:

   ERROR [ExceptionsHandler] TypeError: this.authService.signInWithGoogle is not a function
    at AuthController.googleAuthRedirect (/home/jhon/Desktop/ALURA/argus/Acesi/backClinic/back/src/auth/auth.controller.ts:57:42)
    at /home/jhon/Desktop/ALURA/argus/Acesi/backClinic/back/node_modules/@nestjs/core/router/router-execution-context.js:38:29
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async /home/jhon/Desktop/ALURA/argus/Acesi/backClinic/back/node_modules/@nestjs/core/router/router-execution-context.js:46:28
    at async /home/jhon/Desktop/ALURA/argus/Acesi/backClinic/back/node_modules/@nestjs/core/router/router-proxy.js:9:17
^C


  /* Rode o NestJS: npm run start:dev
  Acesse: http://localhost:3000/auth/google
  O Google pedirá login e, após autenticar, você será redirecionado para http://localhost:3000/auth/google/callback com os dados do usuário. */