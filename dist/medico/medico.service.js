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
exports.MedicoService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const medico_entity_1 = require("./medico.entity");
const especialidades_medico_repository_1 = require("../especialidades/especialidades.medico.repository");
const medico_repository_1 = require("./medico.repository");
const filtro_excecao_global_1 = require("../filtros/filtro-excecao-global");
let MedicoService = class MedicoService {
    constructor(medicoRepository, especialidadesRepo) {
        this.medicoRepository = medicoRepository;
        this.especialidadesRepo = especialidadesRepo;
    }
    async criaMedico(dados) {
        const medico = new medico_entity_1.MedicoEntity();
        medico.id = (0, uuid_1.v4)();
        medico.nome = dados.nome;
        medico.crm = dados.crm;
        medico.cpf = dados.cpf;
        if (dados.especialidades && dados.especialidades.length > 0) {
            const nomes = dados.especialidades.map((e) => e);
            medico.especialidades = await this.especialidadesRepo.buscaPorNomes(nomes);
        }
        const medicoSalvo = await this.medicoRepository.salva(medico);
        return {
            nome: medicoSalvo.nome,
        };
    }
    async listaMedicos() {
        try {
            const medicos = await this.medicoRepository.listaMedicos();
            if (!medicos || medicos.length === 0) {
                throw new common_1.HttpException("Nenhum médico encontrado", common_1.HttpStatus.NOT_FOUND);
            }
            return medicos.map((medico) => {
                var _a;
                const especialidadesStrings = ((_a = medico.especialidades) === null || _a === void 0 ? void 0 : _a.map((especialidade) => especialidade.nome)) ||
                    [];
                return {
                    id: medico.id,
                    nome: medico.nome,
                    cpf: medico.cpf,
                    crm: medico.crm,
                    especialidades: especialidadesStrings,
                };
            });
        }
        catch (err) {
            throw new filtro_excecao_global_1.ErroInterno();
        }
    }
    async atualizaMedico(id, dadosMedico) {
        return this.medicoRepository.atualizaMedico(id, dadosMedico);
    }
    async deletaMedico(id) {
        await this.medicoRepository.deletaMedico(id);
    }
};
MedicoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [medico_repository_1.MedicoRepository,
        especialidades_medico_repository_1.MedicoEspecialidadesRepository])
], MedicoService);
exports.MedicoService = MedicoService;
//# sourceMappingURL=medico.service.js.map