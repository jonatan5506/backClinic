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
exports.MedicoController = void 0;
const common_1 = require("@nestjs/common");
const cria_medico_dto_1 = require("./dto/cria.medico.dto");
const medico_service_1 = require("./medico.service");
const atualiza_medico_dto_1 = require("./dto/atualiza.medico.dto");
let MedicoController = class MedicoController {
    constructor(medicoService) {
        this.medicoService = medicoService;
    }
    async criaMedico(dadosMedico) {
        return await this.medicoService.criaMedico(dadosMedico);
    }
    async listaMedicos() {
        return await this.medicoService.listaMedicos();
    }
    async atualizamedico(id, dadosMedico) {
        await this.medicoService.atualizaMedico(id, dadosMedico);
    }
    async deletaMedico(id) {
        return await this.medicoService.deletaMedico(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [cria_medico_dto_1.CriaMedicoDTO]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "criaMedico", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "listaMedicos", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, atualiza_medico_dto_1.AtualizaMedicoDto]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "atualizamedico", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MedicoController.prototype, "deletaMedico", null);
MedicoController = __decorate([
    (0, common_1.Controller)('medicos'),
    __metadata("design:paramtypes", [medico_service_1.MedicoService])
], MedicoController);
exports.MedicoController = MedicoController;
//# sourceMappingURL=medico.controller.js.map