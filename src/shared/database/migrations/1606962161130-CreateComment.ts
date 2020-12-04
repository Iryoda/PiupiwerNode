import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateComment1606962161130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
                name: 'comments',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_V4()'
                    },
                    {
                        name: 'content',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'piu_id',
                        type: 'varchar',
                        isNullable: false 
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isNullable: false
                    },
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('comments');
    }

}
