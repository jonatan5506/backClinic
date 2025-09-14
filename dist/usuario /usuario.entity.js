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
exports.UsuarioEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const tipo_usuario_enum_1 = require("./enums/tipo.usuario.enum");
let UsuarioEntity = class UsuarioEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nome', length: 100, nullable: false }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(tipo_usuario_enum_1.TipoUsuarioEnum, { message: 'Categoria inválida' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "tipoUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'company', length: 100, nullable: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "company", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'role', length: 100, nullable: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'verified', nullable: true }),
    __metadata("design:type", Boolean)
], UsuarioEntity.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', length: 100, nullable: true }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({ name: 'deleted_at' }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "deletedAt", void 0);
UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'usuarios' })
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map