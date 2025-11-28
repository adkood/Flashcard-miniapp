import { Request, Response, NextFunction } from "express";
import { CardDto } from "../dtos/Card.dto";
import { createCardForDeck, createDeckForUser } from "../services/Deck.service";

export const createDeck = (req: Request, res: Response, next: NextFunction) => {

    try {
        const userId = req.userId;
        const result = createDeckForUser(userId);
        res.status(201).json(result);

    } catch(error) {
        next(error);
    }

}

export const createCard = (req: Request, res: Response, next: NextFunction) => {

    try {

        const userId = req.userId;
        const body: CardDto = req.body;
        const result = createCardForDeck(body, userId);
        res.status(201).json(result);

    } catch(error) {
        next(error);
    }

}