import { User, UserRepository } from "../interfaces/user.interface"
import { UserRepositoryPrisma } from "../repositories/user.repository"

class UserUseCase {
    private userRepository: UserRepository
    constructor() {
        this.userRepository = new UserRepositoryPrisma()
    }

    async create(user: User): Promise<User> {
        return await this.userRepository.create(user);
    }
}

export { UserUseCase }