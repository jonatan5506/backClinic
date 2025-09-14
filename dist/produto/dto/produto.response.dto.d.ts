export declare class CaracteristicaResponseDTO {
    nome: string;
    descricao: string;
}
export declare class ImagemResponseDTO {
    url: string;
    descricao: string;
}
export declare class ProdutoResponseDTO {
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    caracteristicas: CaracteristicaResponseDTO[];
    imagens: ImagemResponseDTO[];
    categoria: string;
}
