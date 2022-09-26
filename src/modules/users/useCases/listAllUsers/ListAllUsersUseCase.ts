import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const findUserById = this.usersRepository.findById(user_id);

    if (!findUserById) {
      throw new Error("Usuário não encontrado!");
    }

    if (!findUserById.admin) {
      throw new Error("Usuário precisa ser um admin");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
