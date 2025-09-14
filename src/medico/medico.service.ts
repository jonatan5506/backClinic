import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { v4 as uuid } from "uuid";
import { MedicoEntity } from "./medico.entity";
import { CriaMedicoDTO } from "./dto/cria.medico.dto";
import { MedicoEspecialidadesRepository } from "../especialidades/especialidades.medico.repository";
import { MedicoResponseDto } from "./dto/medico.respose.dto";
import { AtualizaMedicoDto } from "./dto/atualiza.medico.dto";
import { MedicoRepository } from "./medico.repository";
import { ErroInterno } from "src/filtros/filtro-excecao-global";

@Injectable()
export class MedicoService {
  constructor(
    private readonly medicoRepository: MedicoRepository,
    private readonly especialidadesRepo: MedicoEspecialidadesRepository
  ) {}

  async criaMedico(dados: CriaMedicoDTO): Promise<Partial<MedicoEntity>> {
    const medico = new MedicoEntity();
    medico.id = uuid();
    medico.nome = dados.nome;
    medico.crm = dados.crm;
    medico.cpf = dados.cpf;

    if (dados.especialidades && dados.especialidades.length > 0) {
      const nomes = dados.especialidades.map((e) => e);
      medico.especialidades = await this.especialidadesRepo.buscaPorNomes(
        nomes
      );
    }

    const medicoSalvo = await this.medicoRepository.salva(medico);

    return {
      nome: medicoSalvo.nome,
    };
  }

  async listaMedicos(): Promise<MedicoResponseDto[]> {
    try {
      const medicos = await this.medicoRepository.listaMedicos();

      if (!medicos || medicos.length === 0) {
        // exemplo de erro customizado
        throw new HttpException(
          "Nenhum médico encontrado",
          HttpStatus.NOT_FOUND
        );
      }

      return medicos.map((medico) => {
        const especialidadesStrings =
          medico.especialidades?.map((especialidade) => especialidade.nome) ||
          [];

        return {
          id: medico.id,
          nome: medico.nome,
          cpf: medico.cpf,
          crm: medico.crm,
          especialidades: especialidadesStrings,
        };
      });
    } catch (err) {
      throw new ErroInterno();
    }
  }

  async atualizaMedico(id: string, dadosMedico: AtualizaMedicoDto) {
    return this.medicoRepository.atualizaMedico(id, dadosMedico);
  }

  async deletaMedico(id: string): Promise<void> {
    await this.medicoRepository.deletaMedico(id);
  }
}
