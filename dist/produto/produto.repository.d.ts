import { Repository } from 'typeorm';
import { ProdutoEntity } from './produto.entity';
export declare class ProdutoRepository {
    private readonly ormRepo;
    constructor(ormRepo: Repository<ProdutoEntity>);
    listaTodos(): Promise<ProdutoEntity[]>;
    salva(dadosProduto: ProdutoEntity): Promise<ProdutoEntity>;
    buscaPorId(id: string): Promise<ProdutoEntity>;
    atualiza(id: string, dadosProduto: Partial<ProdutoEntity>): Promise<ProdutoEntity>;
    remove(id: string): Promise<ProdutoEntity>;
}
