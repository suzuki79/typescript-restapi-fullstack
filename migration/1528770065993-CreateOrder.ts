import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateOrder1528770065993 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "orders",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "foodId",
                    type: "int",
                },
                {
                    name: "orderAt",
                    type: "timestamp",
                }
            ]
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("orders");
    }

}
