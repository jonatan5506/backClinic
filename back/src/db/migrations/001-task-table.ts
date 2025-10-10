import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskTable1759517775476 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.query(`
        CREATE TABLE "task" (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            title VARCHAR(256) NOT NULL,
            description TEXT NULL,
            status VARCHAR(50) NOT NULL DEFAULT 'TO_DO',
            expiration_date TIMESTAMP NULL
        );`);
  }
  //Adicionar colunas de auditoria
  //created_at TIMESTAMP DEFAULT now(),
  //updated_at TIMESTAMP DEFAULT now()
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS task;`);
  }
}
