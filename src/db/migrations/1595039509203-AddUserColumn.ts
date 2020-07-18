import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserColumn1595039509203 implements MigrationInterface {
    name = 'AddUserColumn1595039509203'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` ADD `login_id` varchar(8) NOT NULL");
        await queryRunner.query("ALTER TABLE `user` ADD `password` varchar(255) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `password`");
        await queryRunner.query("ALTER TABLE `user` DROP COLUMN `login_id`");
    }

}
