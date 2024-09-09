export interface User {
    id: string
    name: string
    email: string
    user_type: number
    document_id: string
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserRepository {
    //findAll(): Promise<User[]>;
    //findById(id: string): Promise<User| null>;
    //findByEmail(email: string): Promise<User| null>;
    create(user: User): Promise<User>;
    //update(id: string, user: User): Promise<User| null>;
    //delete(id: string): Promise<string>;

}