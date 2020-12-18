import {MigrationInterface, QueryRunner} from "typeorm";

export default class RelationUserPiu1608067138597 implements MigrationInterface {
    name = 'RelationUserPiu1608067138597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users_liked_pius_pius" ("usersId" varchar NOT NULL, "piusId" varchar NOT NULL, CONSTRAINT "PK_2938f4dd5d1217fd0170f86125c" PRIMARY KEY ("usersId", "piusId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_3c8b431de746e344724b0ac3d0" ON "users_liked_pius_pius" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_389ae768e8e7d6b13b9df7c9a3" ON "users_liked_pius_pius" ("piusId") `);
        await queryRunner.query(`CREATE TABLE "users_favorited_pius_pius" ("usersId" varchar NOT NULL, "piusId" varchar NOT NULL, CONSTRAINT "PK_bb32ffc7801ac01d7d6b6dff3b0" PRIMARY KEY ("usersId", "piusId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_837cba5a5a13030722dfc98493" ON "users_favorited_pius_pius" ("usersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_a624d39a8b45564762cfc7ed49" ON "users_favorited_pius_pius" ("piusId") `);
        await queryRunner.query(`CREATE TABLE "user_follow_user" ("usersId_1" varchar NOT NULL, "usersId_2" varchar NOT NULL, CONSTRAINT "PK_0638e62a5b039b473caeccc0d02" PRIMARY KEY ("usersId_1", "usersId_2"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1d834ab25e562fba796edf5876" ON "user_follow_user" ("usersId_1") `);
        await queryRunner.query(`CREATE INDEX "IDX_2e05c69d81bd6fef01250ade20" ON "user_follow_user" ("usersId_2") `);
        await queryRunner.query(`ALTER TABLE "users_liked_pius_pius" ADD CONSTRAINT "FK_3c8b431de746e344724b0ac3d0e" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_liked_pius_pius" ADD CONSTRAINT "FK_389ae768e8e7d6b13b9df7c9a30" FOREIGN KEY ("piusId") REFERENCES "pius"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favorited_pius_pius" ADD CONSTRAINT "FK_837cba5a5a13030722dfc984939" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "users_favorited_pius_pius" ADD CONSTRAINT "FK_a624d39a8b45564762cfc7ed495" FOREIGN KEY ("piusId") REFERENCES "pius"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_follow_user" ADD CONSTRAINT "FK_1d834ab25e562fba796edf58765" FOREIGN KEY ("usersId_1") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_follow_user" ADD CONSTRAINT "FK_2e05c69d81bd6fef01250ade208" FOREIGN KEY ("usersId_2") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_favorited_pius_pius" DROP CONSTRAINT "FK_a624d39a8b45564762cfc7ed495"`);
        await queryRunner.query(`ALTER TABLE "users_favorited_pius_pius" DROP CONSTRAINT "FK_837cba5a5a13030722dfc984939"`);
        await queryRunner.query(`ALTER TABLE "users_liked_pius_pius" DROP CONSTRAINT "FK_389ae768e8e7d6b13b9df7c9a30"`);
        await queryRunner.query(`ALTER TABLE "users_liked_pius_pius" DROP CONSTRAINT "FK_3c8b431de746e344724b0ac3d0e"`);
        await queryRunner.query(`ALTER TABLE "user_follow_user" DROP CONSTRAINT "FK_2e05c69d81bd6fef01250ade208"`);
        await queryRunner.query(`ALTER TABLE "user_follow_user" DROP CONSTRAINT "FK_1d834ab25e562fba796edf58765"`);
        await queryRunner.query(`DROP INDEX "IDX_2e05c69d81bd6fef01250ade20"`);
        await queryRunner.query(`DROP INDEX "IDX_1d834ab25e562fba796edf5876"`);
        await queryRunner.query(`DROP TABLE "user_follow_user"`);
        await queryRunner.query(`DROP INDEX "IDX_a624d39a8b45564762cfc7ed49"`);
        await queryRunner.query(`DROP INDEX "IDX_837cba5a5a13030722dfc98493"`);
        await queryRunner.query(`DROP TABLE "users_favorited_pius_pius"`);
        await queryRunner.query(`DROP INDEX "IDX_389ae768e8e7d6b13b9df7c9a3"`);
        await queryRunner.query(`DROP INDEX "IDX_3c8b431de746e344724b0ac3d0"`);
        await queryRunner.query(`DROP TABLE "users_liked_pius_pius"`);
    }

}
