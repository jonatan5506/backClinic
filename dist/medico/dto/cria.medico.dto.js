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
exports.CriaMedicoDTO = exports.EspecialidadesDto = void 0;
const class_validator_1 = require("class-validator");
class EspecialidadesDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome da especialidade não pode ser vazio' }),
    __metadata("design:type", String)
], EspecialidadesDto.prototype, "nomeEspecialidade", void 0);
exports.EspecialidadesDto = EspecialidadesDto;
class CriaMedicoDTO {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'O nome deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome é obrigatório' }),
    __metadata("design:type", String)
], CriaMedicoDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O CRM deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O CRM é obrigatório' }),
    (0, class_validator_1.Length)(4, 20, { message: 'O CRM deve ter entre 4 e 20 caracteres' }),
    __metadata("design:type", String)
], CriaMedicoDTO.prototype, "crm", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'O CPF deve ser uma string' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'O CPF é obrigatório' }),
    (0, class_validator_1.Length)(11, 11, { message: 'O CPF deve ter exatamente 11 dígitos' }),
    __metadata("design:type", String)
], CriaMedicoDTO.prototype, "cpf", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], CriaMedicoDTO.prototype, "especialidades", void 0);
exports.CriaMedicoDTO = CriaMedicoDTO;
//# sourceMappingURL=cria.medico.dto.js.map