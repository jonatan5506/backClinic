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
const uuid_1 = require("uuid");
const especialidades_medico_repository_1 = require("./especialidades.medico.repository");
const especilidades_medico_entity_1 = require("./especilidades.medico.entity");
let MedicosEspecialidadesService = class MedicosEspecialidadesService {
    constructor(especialidadesRepository) {
        this.especialidadesRepository = especialidadesRepository;
    }
    async criaEspecialidade(dadosEspecialidades) {
        try {
            const especialidade = new especilidades_medico_entity_1.MedicoEspecialidadesEntity();
            especialidade.id = (0, uuid_1.v4)();
            especialidade.nome = dadosEspecialidades.nome.trim();
            const especialidadeSalva = await this.especialidadesRepository.criaEspecialidade(especialidade);
            return especialidadeSalva;
        }
        catch (error) {
            if (error.code === '23505') {
                throw new common_1.BadRequestException('Já existe uma especialidade com esse nome.');
            }
            console.error('Erro ao criar especialidade:', error);
            throw new common_1.InternalServerErrorException('Erro interno ao criar especialidade');
        }
    }
    async listaEspecialidades() {
        const especialidades = await this.especialidadesRepository.listaEspecialidades();
        return especialidades;
    }
    async atualizaEspecialidade(id, dadosEspecialidades) {
        await this.especialidadesRepository.atualizaEspecialidades(id, dadosEspecialidades);
    }
    async deletaEspecialidade(id) {
        try {
            await this.especialidadesRepository.deletaEspecialidade(id);
        }
        catch (error) {
            throw new Error('Erro ao deletar a especialidade: ' + error.message);
        }
        return { message: 'Especialidade deletado com sucesso' };
    }
};
MedicosEspecialidadesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [especialidades_medico_repository_1.MedicoEspecialidadesRepository])
], MedicosEspecialidadesService);
exports.MedicosEspecialidadesService = MedicosEspecialidadesService;
//# sourceMappingURL=especialidades.medico.service.js.map