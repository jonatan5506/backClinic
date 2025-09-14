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
exports.MedicoSeeder = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const medico_entity_1 = require("../medico/medico.entity");
const especilidades_medico_entity_1 = require("../especialidades/especilidades.medico.entity");
let MedicoSeeder = class MedicoSeeder {
    constructor(medicoRepository, especialidadeRepository) {
        this.medicoRepository = medicoRepository;
        this.especialidadeRepository = especialidadeRepository;
    }
    async run() {
        const medicosData = [
            { nome: 'Dr. João da Silva', crm: '12345', cpf: '11111111111', especialidadesNomes: ['Cardiologia', 'Clínico Geral'] },
            { nome: 'Dra. Maria Oliveira', crm: '67890', cpf: '22222222222', especialidadesNomes: ['Pediatria', 'Endocrinologia'] },
            { nome: 'Dr. Pedro Costa', crm: '13579', cpf: '33333333333', especialidadesNomes: ['Neurologia'] },
            { nome: 'Dra. Ana Pereira', crm: '24680', cpf: '44444444444', especialidadesNomes: ['Oftalmologia', 'Reumatologia'] },
            { nome: 'Dr. Lucas Fernandes', crm: '11223', cpf: '55555555555', especialidadesNomes: ['Dermatologia'] },
            { nome: 'Dra. Júlia Santos', crm: '33445', cpf: '66666666666', especialidadesNomes: ['Ginecologia'] },
            { nome: 'Dr. Gabriel Martins', crm: '55667', cpf: '77777777777', especialidadesNomes: ['Ortopedia'] },
            { nome: 'Dra. Isabela Rocha', crm: '77889', cpf: '88888888888', especialidadesNomes: ['Psiquiatria', 'Neurologia'] },
            { nome: 'Dr. Rafael Souza', crm: '99001', cpf: '99999999999', especialidadesNomes: ['Urologia'] },
            { nome: 'Dra. Laura Gomes', crm: '00112', cpf: '10101010101', especialidadesNomes: ['Oncologia'] },
            { nome: 'Dr. Bruno Lima', crm: '22334', cpf: '11223344556', especialidadesNomes: ['Infectologia', 'Clínico Geral'] },
            { nome: 'Dra. Beatriz Almeida', crm: '44556', cpf: '12345678901', especialidadesNomes: ['Gastroenterologia'] },
            { nome: 'Dr. Vitor Mendes', crm: '66778', cpf: '13579246801', especialidadesNomes: ['Cardiologia'] },
            { nome: 'Dra. Camila Ferreira', crm: '88990', cpf: '14725836901', especialidadesNomes: ['Pediatria'] },
            { nome: 'Dr. Daniel Castro', crm: '99887', cpf: '15935748601', especialidadesNomes: ['Endocrinologia'] },
        ];
        for (const medicoData of medicosData) {
            const existe = await this.medicoRepository.findOne({ where: { crm: medicoData.crm } });
            if (!existe) {
                const medico = this.medicoRepository.create({
                    nome: medicoData.nome,
                    crm: medicoData.crm,
                    cpf: medicoData.cpf,
                });
                const especialidades = await this.especialidadeRepository
                    .createQueryBuilder('especialidade')
                    .where('especialidade.nome IN (:...nomes)', { nomes: medicoData.especialidadesNomes })
                    .getMany();
                medico.especialidades = especialidades;
                await this.medicoRepository.save(medico);
            }
        }
        console.log('✅ Seed de médicos inserida com sucesso!');
    }
};
MedicoSeeder = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(medico_entity_1.MedicoEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(especilidades_medico_entity_1.MedicoEspecialidadesEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], MedicoSeeder);
exports.MedicoSeeder = MedicoSeeder;
//# sourceMappingURL=medicos.seed.js.map