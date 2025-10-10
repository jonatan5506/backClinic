import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserTable1759517810637 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "user" (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          username VARCHAR(256) NOT NULL,
          password VARCHAR(255) NOT NULL,
          CONSTRAINT user_un_username UNIQUE (username)
      );
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE IF EXISTS user;`);
  }
}
