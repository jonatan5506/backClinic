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
exports.CriaUsuarioDTO = void 0;
const class_validator_1 = require("class-validator");
const tipo_usuario_enum_1 = require("../enums/tipo.usuario.enum");
class CriaUsuarioDTO {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome não pode ser vazio' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(tipo_usuario_enum_1.TipoUsuarioEnum, { message: 'Categoria inválida' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "tipoUsuario", void 0);
__decorate([
    (0, class_validator_1.MinLength)(1, { message: 'A senha precisa ter pelo menos 6 caracteres' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.MinLength)(1, { message: 'A senha precisa ter pelo menos 6 caracteres' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "role", void 0);
__decorate([
    (0, class_validator_1.MinLength)(1, { message: 'A senha precisa ter pelo menos 6 caracteres' }),
    __metadata("design:type", String)
], CriaUsuarioDTO.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CriaUsuarioDTO.prototype, "verified", void 0);
exports.CriaUsuarioDTO = CriaUsuarioDTO;
//# sourceMappingURL=CriaUsuario.dto.js.map