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
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
const usuario_repository_1 = require("./usuario.repository");
const ListaUsuario_dto_1 = require("./dto/ListaUsuario.dto");
const typeorm_2 = require("@nestjs/typeorm");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepositoryOld, usuarioRepository) {
        this.usuarioRepositoryOld = usuarioRepositoryOld;
        this.usuarioRepository = usuarioRepository;
    }
    async criaUsuario(dados) {
        const usuario = new usuario_entity_1.UsuarioEntity();
        usuario.id = (0, uuid_1.v4)();
        usuario.company = dados.company;
        usuario.role = dados.role;
        usuario.status = dados.status;
        usuario.verified = dados.verified;
        usuario.name = dados.name;
        usuario.tipoUsuario = dados.tipoUsuario;
        return await this.usuarioRepository.salva(usuario);
    }
    async listaUsuarios() {
        const usuariosSalvos = await this.usuarioRepositoryOld.find();
        const usuariosLista = usuariosSalvos.map((usuario) => new ListaUsuario_dto_1.ListaUsuarioDTO(usuario.id, usuario.name, usuario.company, usuario.role, usuario.status, usuario.verified, usuario.tipoUsuario));
        return usuariosLista;
    }
    async atualizaUsuario(id, novosDados) {
        this.usuarioRepositoryOld.update(id, novosDados);
    }
    async deletaUsuario(id) {
        this.usuarioRepositoryOld.delete(id);
    }
};
UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(usuario_entity_1.UsuarioEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        usuario_repository_1.UsuarioRepository])
], UsuarioService);
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map