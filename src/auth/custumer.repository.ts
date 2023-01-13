import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { Custumer } from './custumer.entity';
import { Repository } from 'typeorm';

export class CustumerRepository extends Repository<Custumer> {
  async createUser(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    // const user = this.create({ name: username, password });

    // await this.save(user);

    return authCredentialsDto;
  }

  async validateUserPassword(authCredentialsDto: AuthCredentialsDto) {
    const { username, password } = authCredentialsDto;

    const user = await this.findOne({ where: { name: username } });

    return user && user.password === password ? user : null;
  }
}
