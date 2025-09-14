import { ProdutoCaracteristicaEntity } from "./produto.caracteristica.entity";
import { ProdutoImagemEntity } from "./produto_imagem.entity";
export declare class ProdutoEntity {
    id: string;
    usuarioId: string;
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    categoria: string;
    caracteristicas: ProdutoCaracteristicaEntity[];
    imagens: ProdutoImagemEntity[];
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
