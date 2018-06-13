import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrder1528770065993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE orders ( id int, foodId int, orderAt TIMESTAMP NULL DEFAULT NULL, PRIMARY KEY(id)); ");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("orders");
    }

}
