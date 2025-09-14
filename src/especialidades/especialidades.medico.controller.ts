import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { EspecialidadesResponseDto } from "./dto/especialidades.response.dto";
import { MedicosEspecialidadesService } from "./especialidades.medico.service";
import { CriaEspecialidadeDto } from "./dto/cria.especialidade.dto";
import { AtualizaEspecialidadeDto } from "./dto/atualiza.especialidade.dto";

@Controller('especialidades')
export class MedicoEspecialidadesController {
    constructor(
        private readonly especialidadesService: MedicosEspecialidadesService
    ) {}

    @Post()
    async criaEspecialidades(@Body() dadosEspecialidade: CriaEspecialidadeDto): Promise<EspecialidadesResponseDto> {
        return this.especialidadesService.criaEspecialidade(dadosEspecialidade);
    }

    @Get()
    async listaEspecialidades(): Promise<EspecialidadesResponseDto[]> {
        return this.especialidadesService.listaEspecialidades();
    }

    @Put('/:id')
    async atualizaEspecialidade(
        @Param('id') id: string,
        @Body() novosDados: AtualizaEspecialidadeDto
    ) {
         await this.especialidadesService.atualizaEspecialidade(
            id,
            novosDados
        );
    }

    @Delete('/:id')
    async deletaEspecialidade(
        @Param('id') id: string
    ) {
        await this.especialidadesService.deletaEspecialidade(id);
    }
}
