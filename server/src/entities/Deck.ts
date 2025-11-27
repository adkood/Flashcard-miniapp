import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from "typeorm";
import { Card } from "./Card";

@Entity()
export class Deck {

    @PrimaryGeneratedColumn("uuid")
    id !: String;

    @Column({ type: "uuid", nullable: false })
    userId !: String;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    lastReviewedOn!: Date;

    @OneToMany(() => Card, (card) => card.deck)
    cards !: Card[];
}