import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id !: string;

    @Column({ type: "varchar", length: 100})
    name !: string;

    @Column({ type: "varchar", length: 100, unique: true})
    username !: string;

    @Column({ type: "text"})
    password !: string;
}