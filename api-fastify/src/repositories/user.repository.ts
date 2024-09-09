import { prisma } from '../database/prisma-client';
import { User, UserRepository } from "../interfaces/user.interface";

class UserRepositoryPrisma implements UserRepository {
    
    async create(user: User): Promise<User> {
        return await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                user_type: user.user_type,
                document_id: user.document_id
            }
        });
      }
    
}

export { UserRepositoryPrisma };