import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("orders")
export class Order {

    @PrimaryColumn()
    id: number;

    @Column()
    foodId: number;

    @Column()
    orderAt: Date;
}
