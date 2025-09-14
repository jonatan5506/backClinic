import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaMedicoDTO } from "./dto/cria.medico.dto";
import { MedicoService } from "./medico.service";
import { MedicoEntity } from "./medico.entity";
import { AtualizaMedicoDto } from "./dto/atualiza.medico.dto";

@Controller('medicos')
export class MedicoController {
    constructor(
        private readonly medicoService: MedicoService
    ) { }

    @Post()
    async criaMedico(@Body() dadosMedico: CriaMedicoDTO): Promise<Partial<MedicoEntity>> {
        return await this.medicoService.criaMedico(dadosMedico);
    }

    @Get()
    async listaMedicos() {
        return await this.medicoService.listaMedicos();
    }

    @Put(':id')
    async atualizamedico(@Param('id') id: string, @Body() dadosMedico: AtualizaMedicoDto) {
        await this.medicoService.atualizaMedico(id, dadosMedico);
    }

    @Delete(':id')
    async deletaMedico(
        @Param('id') id: string
    ) {
        return await this.medicoService.deletaMedico(id);
    }
}
