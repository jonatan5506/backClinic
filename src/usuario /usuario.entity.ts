import { IsEnum } from "class-validator";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TipoUsuarioEnum } from "./enums/tipo.usuario.enum";

@Entity({ name: 'usuarios' })
export class UsuarioEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'nome', length: 100, nullable: false })
  name: string;
  @IsEnum(TipoUsuarioEnum, {message:'Categoria inválida'})
  tipoUsuario: TipoUsuarioEnum;
  @Column({ name: 'company', length: 100, nullable: true })
  company: string;
  @Column({ name: 'role', length: 100, nullable: true })
  role: string;
  @Column({ name: 'verified', nullable: true })
  verified: boolean;
  @Column({ name: 'status', length: 100, nullable: true })
  status: string;

  //v1
 /*  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'email', length: 100, nullable: false })
  email: string;
  @Column({ name: 'senha', length: 50, nullable: false })
  senha: string; */

  @CreateDateColumn({ name: 'created_at'})
  createdAt: string;
  @UpdateDateColumn({ name: 'updated_at'})
  updatedAt: string;
  @DeleteDateColumn({ name: 'deleted_at'})
  deletedAt: string;
}
