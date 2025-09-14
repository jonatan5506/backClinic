import { Repository } from "typeorm";
import { ProdutoEntity } from "./produto.entity";
import { CriaProdutoDTO } from "./dto/CriaProduto.dto";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";
import { ProdutoResponseDTO } from "./dto/produto.response.dto";
export declare class ProdutoService {
    private readonly produtoRepository;
    constructor(produtoRepository: Repository<ProdutoEntity>);
    criaProduto(dadosProduto: CriaProdutoDTO): Promise<ProdutoResponseDTO>;
    listaTodos(): Promise<ProdutoResponseDTO[]>;
    atualiza(id: string, dadosProduto: AtualizaProdutoDTO): Promise<ProdutoResponseDTO>;
    remove(id: string): Promise<ProdutoResponseDTO>;
    private toResponseDTO;
}
