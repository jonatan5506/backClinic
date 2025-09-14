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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medico_entity_1 = require("./medico.entity");
const typeorm_2 = require("typeorm");
const especialidades_medico_repository_1 = require("../especialidades/especialidades.medico.repository");
let MedicoRepository = class MedicoRepository {
    constructor(ormRepo, especialidadesRepo) {
        this.ormRepo = ormRepo;
        this.especialidadesRepo = especialidadesRepo;
    }
    async salva(dadosMedico) {
        return this.ormRepo.save(dadosMedico);
    }
    async listaMedicos() {
        return this.ormRepo.find({
            relations: ['especialidades'],
        });
    }
    async atualizaMedico(id, dadosMedico) {
        var _a;
        const medico = await this.buscaPorId(id);
        Object.assign(medico, dadosMedico);
        if (dadosMedico.especialidades) {
            const especialidades = await this.especialidadesRepo.buscaPorNomes(dadosMedico.especialidades);
            medico.especialidades = especialidades;
        }
        const medicoAtualizado = await this.ormRepo.save(medico);
        return {
            id: medicoAtualizado.id,
            nome: medicoAtualizado.nome,
            cpf: medicoAtualizado.cpf,
            crm: medicoAtualizado.crm,
            especialidades: ((_a = medicoAtualizado.especialidades) === null || _a === void 0 ? void 0 : _a.map((especialidade) => especialidade.nome)) || [],
        };
    }
    async deletaMedico(id) {
        const resultado = await this.ormRepo.delete(id);
        if (resultado.affected === 0) {
            throw new common_1.NotFoundException('Médico não encontrado.');
        }
    }
    async buscaPorId(id) {
        const possivelMedico = await this.ormRepo.findOneBy({
            id: id,
        });
        if (!possivelMedico) {
            throw new common_1.NotFoundException('Médico não existe');
        }
        return possivelMedico;
    }
};
MedicoRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medico_entity_1.MedicoEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        especialidades_medico_repository_1.MedicoEspecialidadesRepository])
], MedicoRepository);
exports.MedicoRepository = MedicoRepository;
//# sourceMappingURL=medico.repository.js.map