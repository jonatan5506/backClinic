"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicoEspecialidadesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medico_especilidades_entity_1 = require("./medico.especilidades.entity");
const especialidades_medico_controller_1 = require("./especialidades.medico.controller");
const medico_especialidades_repository_1 = require("./medico.especialidades.repository");
const medico_especialidades_service_1 = require("./medico.especialidades.service");
let MedicoEspecialidadesModule = class MedicoEspecialidadesModule {
};
MedicoEspecialidadesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medico_especilidades_entity_1.MedicoEspecialidadesEntity])],
        controllers: [especialidades_medico_controller_1.MedicoEspecialidadesController],
        providers: [medico_especialidades_repository_1.MedicoEspecialidadesRepository, medico_especialidades_service_1.MedicosEspecialidadesService],
    })
], MedicoEspecialidadesModule);
exports.MedicoEspecialidadesModule = MedicoEspecialidadesModule;
//# sourceMappingURL=medico.especialidades.module.js.map