import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class SeedAdminUser1696355334000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hashedPassword = await bcrypt.hash('admin', 10);

    await queryRunner.query(
      `INSERT INTO "usuario" (nome, senha, email) VALUES ($1, $2, $3)`,
      ['admin', hashedPassword, 'admin@email.com'],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "usuario" WHERE nome = $1`, ['admin']);
  }
}
