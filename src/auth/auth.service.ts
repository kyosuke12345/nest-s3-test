import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userService.findOne(username);
    // FIXME passwordは暗号化をかけてチェックしてください。
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
