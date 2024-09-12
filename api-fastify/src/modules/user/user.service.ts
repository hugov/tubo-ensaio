import { hashPassword } from "../../utils/hash";
import { db } from "../../utils/prisma";
import { CreateUserInput } from "./user.schema";

export async function createUser(input: CreateUserInput) {

    console.log('input: ', input);

    const { password, ...rest } = input;
    console.log('rest: ', rest);
    console.log('password: ', password);

    const { hash, salt } = hashPassword(password);
    console.log('hash: ', hash);
    console.log('salt: ', salt);

    const user = await db.user.create({
        data: {...rest, salt, password: hash}
    });

    return user;
};

export async function findUserByEmail(email: string) {
    return db.user.findUnique({
        where: {
            email
        }
    })
};

export async function getUsers() {
    return db.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
        }
    });
}