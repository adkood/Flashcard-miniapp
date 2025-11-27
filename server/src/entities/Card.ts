import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Deck } from "./Deck";

@Entity()
export class Card {

    @PrimaryGeneratedColumn("uuid")
    id !: String;

    @Column({ type: "uuid", nullable: false }) 
    deckId !: String;

    @Column({ type: "text", nullable: false})
    content !: String;

    @Column({ type: "enum", enum: ["LOW", "MEDIUM", "HIGH"], default: "LOW"})
    confidenceLevel !: "LOW" | "MEDIUM" | "HIGH";

    @ManyToOne(() => Deck, (deck) => deck.cards)
    deck !: Deck;
}