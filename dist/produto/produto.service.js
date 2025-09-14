"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const produto_entity_1 = require("./produto.entity");
const produto_caracteristica_entity_1 = require("./produto.caracteristica.entity");
const produto_imagem_entity_1 = require("./produto_imagem.entity");
const crypto_1 = require("crypto");
let ProdutoService = class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async criaProduto(dadosProduto) {
        const produto = new produto_entity_1.ProdutoEntity();
        produto.id = (0, crypto_1.randomUUID)();
        produto.nome = dadosProduto.nome;
        produto.usuarioId = dadosProduto.usuarioId;
        produto.valor = dadosProduto.valor;
        produto.quantidade = dadosProduto.quantidade;
        produto.descricao = dadosProduto.descricao;
        produto.categoria = dadosProduto.categoria;
        produto.caracteristicas = dadosProduto.caracteristicas.map(c => {
            const caracteristica = new produto_caracteristica_entity_1.ProdutoCaracteristicaEntity();
            caracteristica.nome = c.nome;
            caracteristica.descricao = c.descricao;
            caracteristica.produto = produto;
            return caracteristica;
        });
        produto.imagens = dadosProduto.imagens.map(i => {
            const imagem = new produto_imagem_entity_1.ProdutoImagemEntity();
            imagem.url = i.url;
            imagem.descricao = i.descricao;
            imagem.produto = produto;
            return imagem;
        });
        const salvo = await this.produtoRepository.save(produto);
        return this.toResponseDTO(salvo);
    }
    async listaTodos() {
        const produtos = await this.produtoRepository.find({
            relations: ['caracteristicas', 'imagens'],
        });
        return produtos.map(p => this.toResponseDTO(p));
    }
    async atualiza(id, dadosProduto) {
        var _a, _b, _c, _d, _e;
        const produto = await this.produtoRepository.findOne({
            where: { id },
            relations: ['caracteristicas', 'imagens'],
        });
        if (!produto)
            throw new common_1.NotFoundException('Produto não encontrado');
        Object.assign(produto, {
            nome: (_a = dadosProduto.nome) !== null && _a !== void 0 ? _a : produto.nome,
            valor: (_b = dadosProduto.valor) !== null && _b !== void 0 ? _b : produto.valor,
            quantidade: (_c = dadosProduto.quantidadeDisponivel) !== null && _c !== void 0 ? _c : produto.quantidade,
            descricao: (_d = dadosProduto.descricao) !== null && _d !== void 0 ? _d : produto.descricao,
            categoria: (_e = dadosProduto.categoria) !== null && _e !== void 0 ? _e : produto.categoria,
        });
        if (dadosProduto.caracteristicas) {
            produto.caracteristicas = dadosProduto.caracteristicas.map(c => {
                const caracteristica = new produto_caracteristica_entity_1.ProdutoCaracteristicaEntity();
                caracteristica.nome = c.nome;
                caracteristica.descricao = c.descricao;
                caracteristica.produto = produto;
                return caracteristica;
            });
        }
        if (dadosProduto.imagens) {
            produto.imagens = dadosProduto.imagens.map(i => {
                const imagem = new produto_imagem_entity_1.ProdutoImagemEntity();
                imagem.url = i.url;
                imagem.descricao = i.descricao;
                imagem.produto = produto;
                return imagem;
            });
        }
        const salvo = await this.produtoRepository.save(produto);
        return this.toResponseDTO(salvo);
    }
    async remove(id) {
        const produto = await this.produtoRepository.findOne({ where: { id } });
        if (!produto)
            throw new common_1.NotFoundException('Produto não encontrado');
        await this.produtoRepository.remove(produto);
        return this.toResponseDTO(produto);
    }
    toResponseDTO(produto) {
        var _a, _b;
        return {
            nome: produto.nome,
            valor: produto.valor,
            quantidade: produto.quantidade,
            descricao: produto.descricao,
            categoria: produto.categoria,
            caracteristicas: ((_a = produto.caracteristicas) === null || _a === void 0 ? void 0 : _a.map(c => ({
                nome: c.nome,
                descricao: c.descricao
            }))) || [],
            imagens: ((_b = produto.imagens) === null || _b === void 0 ? void 0 : _b.map(i => ({
                url: i.url,
                descricao: i.descricao
            }))) || [],
        };
    }
};
ProdutoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(produto_entity_1.ProdutoEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProdutoService);
exports.ProdutoService = ProdutoService;
//# sourceMappingURL=produto.service.js.map