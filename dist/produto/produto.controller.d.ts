import { AtualizaProdutoDTO } from './dto/AtualizaProduto.dto';
import { CriaProdutoDTO } from './dto/CriaProduto.dto';
import { ProdutoService } from './produto.service';
import { ProdutoResponseDTO } from './dto/produto.response.dto';
export declare class ProdutoController {
    private readonly produtoService;
    constructor(produtoService: ProdutoService);
    criaNovo(dadosProduto: CriaProdutoDTO): Promise<ProdutoResponseDTO>;
    listaTodos(): Promise<ProdutoResponseDTO[]>;
    atualiza(id: string, dadosProduto: AtualizaProdutoDTO): Promise<{
        mensagem: string;
        produto: ProdutoResponseDTO;
    }>;
    remove(id: string): Promise<{
        mensagem: string;
        produto: ProdutoResponseDTO;
    }>;
}
