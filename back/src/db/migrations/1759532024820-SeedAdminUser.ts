import { MigrationInterface, QueryRunner } from 'typeorm';
import * as bcrypt from 'bcrypt';

export class SeedAdminUser1696355334000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const hashedPassword = await bcrypt.hash('admin', 10);

    await queryRunner.query(
      `INSERT INTO "user" (username, password) VALUES ($1, $2)`,
      ['admin', hashedPassword],
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "user" WHERE username = $1`, [
      'admin',
    ]);
  }
}
