"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicosEspecialidadesService = void 0;
const common_1 = require("@nestjs/common");
const especialidades_medico_repository_1 = require("./especialidades.medico.repository");
const medico_especilidades_entity_1 = require("./medico.especilidades.entity");
const uuid_1 = require("uuid");
const medico_entity_1 = require("../medico/medico.entity");
let MedicosEspecialidadesService = class MedicosEspecialidadesService {
    constructor(especialidadesRepository) {
        this.especialidadesRepository = especialidadesRepository;
    }
    async criaEspecialidade(dadosEspecialidades) {
        const especialidades = new medico_especilidades_entity_1.MedicoEspecialidadesEntity();
        especialidades.id = (0, uuid_1.v4)();
        especialidades.nome = dadosEspecialidades.nome;
        especialidades.medicos = dadosEspecialidades.medicos.map(e => {
            const medico = new medico_entity_1.MedicoEntity();
            medico.nome = e.nome;
            medico.cpf = e.cpf;
            medico.crm = e.crm;
            medico.id = e.id;
            medico.especialidades = [especialidades];
            return medico;
        });
        const especialidadesSalvas = await this.especialidadesRepository.criaEspecialidade(especialidades);
        return especialidadesSalvas;
    }
    async listaEspecialidades() {
        const especialidades = await this.especialidadesRepository.listaEspecialidades();
        return especialidades;
    }
};
MedicosEspecialidadesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [especialidades_medico_repository_1.MedicoEspecialidadesRepository])
], MedicosEspecialidadesService);
exports.MedicosEspecialidadesService = MedicosEspecialidadesService;
//# sourceMappingURL=medico.especialidades.service.js.map