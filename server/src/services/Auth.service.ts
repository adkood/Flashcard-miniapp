import { AppDataSource } from "../data-source";
import { SignupDto } from "../dtos/Signup.dto";
import { User } from "../entities/User";
import { HttpError } from "../utils/HttpError";
import bcrypt from "bcrypt";

export const registerUser = async (data: SignupDto) => {
    try {

        const { name, username, password } = data;
        
        console.log(name, username, password);
        
        if(name == null || username == null || password == null) {
            throw new HttpError(400, "name, username or password is missing");
        }
        
        const userRepo = AppDataSource.getRepository(User);

        const userExist = await userRepo.findOne({ where: { username } });

        if(userExist != null) {
            throw new HttpError(400, "User with this username already exists");
        } 

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = userRepo.create({
            name,
            username,
            password: hashedPassword,
        });

        await userRepo.save(newUser);

        return {
            status: "success",
            message: "User registered",
            data: {
                user: newUser
            }
        }

    } catch (error) {
        throw new HttpError(500, "Something went wrong");
    }
}