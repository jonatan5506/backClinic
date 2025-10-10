import { MigrationInterface, QueryRunner } from 'typeorm';

export class usuarioTable1759956817620 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.query(`
      CREATE TABLE "usuario" (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        nome VARCHAR(256) NOT NULL,
        email VARCHAR(256) UNIQUE,
        senha VARCHAR(256) NOT NULL
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS usuario;`);
  }
}
