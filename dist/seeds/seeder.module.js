"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const especialidade_medico_seed_1 = require("./especialidade.medico.seed");
const especilidades_medico_entity_1 = require("../especialidades/especilidades.medico.entity");
const especialidades_medico_repository_1 = require("../especialidades/especialidades.medico.repository");
const medicos_seed_1 = require("./medicos.seed");
const medico_entity_1 = require("../medico/medico.entity");
const medico_repository_1 = require("../medico/medico.repository");
let SeederModule = class SeederModule {
};
SeederModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: () => ({
                    type: 'postgres',
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT, 10),
                    username: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME,
                    entities: [__dirname + '/../**/*.entity.{ts,js}'],
                    synchronize: true,
                }),
            }),
            typeorm_1.TypeOrmModule.forFeature([especilidades_medico_entity_1.MedicoEspecialidadesEntity, medico_entity_1.MedicoEntity]),
        ],
        providers: [
            especialidade_medico_seed_1.MedicoEspecialidadeSeed,
            especilidades_medico_entity_1.MedicoEspecialidadesEntity,
            especialidades_medico_repository_1.MedicoEspecialidadesRepository,
            medicos_seed_1.MedicoSeeder,
            medico_entity_1.MedicoEntity,
            medico_repository_1.MedicoRepository
        ],
    })
], SeederModule);
exports.SeederModule = SeederModule;
//# sourceMappingURL=seeder.module.js.map