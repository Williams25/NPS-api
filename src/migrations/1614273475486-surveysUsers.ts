import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class surveysUsers1614273475486 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'surveys_users',
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
					name: 'user_id',
					type: 'integer',
				},
				{
					name: 'survey_id',
					type: 'integer',
				},
				{
					name: 'value',
					type: 'number',
					isNullable: true,
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
			],
			foreignKeys: [
				{
					name: 'fk_user',
					referencedTableName: 'users',
					referencedColumnNames: ['id'],
					columnNames: ['user_id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				},
				{
					name: 'fk_survey',
					referencedTableName: 'surveys',
					referencedColumnNames: ['id'],
					columnNames: ['survey_id'],
					onDelete: 'CASCADE',
					onUpdate: 'CASCADE'
				}
			]
		}))
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('surveys_userss')
	}

}
