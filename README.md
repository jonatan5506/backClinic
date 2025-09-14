
```
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
│  ├─ main.ts
│  ├─ medico
│  │  ├─ dto
│  │  │  ├─ cria.medico.dto.ts
│  │  │  └─ medico.respose.dto.ts
│  │  ├─ medico.controller.ts
│  │  ├─ medico.entity.ts
│  │  ├─ medico.module.ts
│  │  ├─ medico.repository.ts
│  │  └─ medico.service.ts
│  ├─ seeds
│  │  ├─ especialidade.medico.seed.ts
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

```

TODO Middleware de erros
TODO Finalizar Cruds
TODO validar unico crm e cpf


TODO AWS

1º CRIAR VPC
* EC2 DB ACESSADO APENAS PELO SRV WEBSERVICE 
* EC2 DB ACESSADO APENAS PELO SRV WEBSERVICE    