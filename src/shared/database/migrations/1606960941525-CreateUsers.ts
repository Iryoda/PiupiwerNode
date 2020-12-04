import {Column, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1606960941525 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_V4()'


                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                        isNullable: false
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        isNullable: false    
                    },
                    {
                        name: 'photo',
                        type: 'varchar',
                        isNullable: false    
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                        isNullable: false    
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}
