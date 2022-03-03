import {MigrationInterface, QueryRunner} from "typeorm";

export class first1646042366163 implements MigrationInterface {
    name = 'first1646042366163'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "rates" ("id" SERIAL NOT NULL, "test" character varying NOT NULL, CONSTRAINT "PK_2c804ed4019b80ce48eedba5cec" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "rates"`);
    }

}
