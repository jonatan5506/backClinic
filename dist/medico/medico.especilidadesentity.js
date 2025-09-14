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
exports.MedicoEspecialidadesEntity = void 0;
const typeorm_1 = require("typeorm");
const medico_entity_1 = require("./medico.entity");
let MedicoEspecialidadesEntity = class MedicoEspecialidadesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MedicoEspecialidadesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], MedicoEspecialidadesEntity.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => medico_entity_1.MedicoEntity, (medico) => medico.especialidades),
    __metadata("design:type", Array)
], MedicoEspecialidadesEntity.prototype, "medicos", void 0);
MedicoEspecialidadesEntity = __decorate([
    (0, typeorm_1.Entity)('especialidades')
], MedicoEspecialidadesEntity);
exports.MedicoEspecialidadesEntity = MedicoEspecialidadesEntity;
//# sourceMappingURL=medico.especilidadesentity.js.map