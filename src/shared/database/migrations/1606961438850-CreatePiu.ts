import {MigrationInterface, QueryRunner, Table, Timestamp} from "typeorm";

export class CreatePiu1606961438850 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table({
                name: 'pius',
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
                        isNullable: false,  
                    },
                    {
                        name: 'created_at',
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        isNullable: false,
                    },
                    {
                        name: 'user_id',
                        type: 'varchar',
                        isNullable: false,
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pius');
    }

}
