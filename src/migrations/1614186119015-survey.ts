import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class survey1614186119015 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'surveys',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'title',
          type: 'varchar',
        },
        {
          name: 'description',
          type: 'varchar',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        },
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('surveys')
  }

}
