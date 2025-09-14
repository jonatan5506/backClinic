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
exports.MedicoEspecialidadesRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const especilidades_medico_entity_1 = require("./especilidades.medico.entity");
let MedicoEspecialidadesRepository = class MedicoEspecialidadesRepository {
    constructor(ormRepo) {
        this.ormRepo = ormRepo;
    }
    async criaEspecialidade(dadosEspecialidade) {
        return await this.ormRepo.save(dadosEspecialidade);
    }
    async listaEspecialidades() {
        const especialidades = await this.ormRepo.find({
            select: ['nome', 'id']
        });
        return especialidades;
    }
    async atualizaEspecialidades(id, dadosEspecialidade) {
        const especialidades = await this.buscaPorId(id);
        Object.entries(dadosEspecialidade).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            especialidades[chave] = valor;
        });
        await this.ormRepo.save(especialidades);
        return {
            nome: especialidades.nome,
        };
    }
    async deletaEspecialidade(id) {
        try {
            const especialidade = await this.buscaPorId(id);
            await this.ormRepo.delete(especialidade.id);
        }
        catch (error) {
            throw new Error('Erro ao deletar a especialidade: ' + error.message);
        }
    }
    async buscaPorId(id) {
        const possivelEspecialidade = await this.ormRepo.findOneBy({
            id: id,
        });
        if (!possivelEspecialidade) {
            throw new Error('Especialidade não existe');
        }
        return possivelEspecialidade;
    }
    async buscaPorNomes(nomes) {
        const especialidades = await this.ormRepo.find({
            where: { nome: (0, typeorm_2.In)(nomes) },
        });
        if (especialidades.length !== nomes.length) {
            const encontrados = especialidades.map(e => e.nome);
            const faltando = nomes.filter(n => !encontrados.includes(n));
            throw new common_1.NotFoundException(`Especialidades não encontradas: ${faltando.join(', ')}`);
        }
        return especialidades;
    }
};
MedicoEspecialidadesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(especilidades_medico_entity_1.MedicoEspecialidadesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], MedicoEspecialidadesRepository);
exports.MedicoEspecialidadesRepository = MedicoEspecialidadesRepository;
//# sourceMappingURL=especialidades.medico.repository.js.map