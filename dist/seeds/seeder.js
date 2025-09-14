"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const seeder_module_1 = require("./seeder.module");
const especialidade_medico_seed_1 = require("./especialidade.medico.seed");
const medicos_seed_1 = require("./medicos.seed");
async function bootstrap() {
    const app = await core_1.NestFactory.createApplicationContext(seeder_module_1.SeederModule);
    const especialidadeSeed = app.get(especialidade_medico_seed_1.MedicoEspecialidadeSeed);
    await especialidadeSeed.run();
    const medicoSeed = app.get(medicos_seed_1.MedicoSeeder);
    await medicoSeed.run();
    await app.close();
}
bootstrap();
//# sourceMappingURL=seeder.js.map