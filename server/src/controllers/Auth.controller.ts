import { NextFunction, Request, Response } from "express" 
import { SignupDto } from "../dtos/Signup.dto";
import { registerUser } from "../services/Auth.service";

export const signup = async (req : Request, res : Response, next: NextFunction) => {

    try { 
        const body: SignupDto = req.body;
        const result = await registerUser(body);
        return res.status(201).json(result);
    } catch (error) {
        next(error);
    }

}