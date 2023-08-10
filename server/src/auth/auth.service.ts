import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/schema/users.schema';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(usertofind: User) {
    const user = await this.usersService.findUser(usertofind);
    if (!user) {
      return { status: 204, message: 'User not found' };
    }
    const payload = { id: user._id, email: user.email };
    return {
      email: user.email,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async signUp(usertoregister: User) {
    const user = await this.usersService.findUser(usertoregister);
    if (user) {
      return { status: 409, message: 'User with this email already exists' };
    }
    const newUser = await this.usersService.create(usertoregister);
    const payload = { id: newUser._id, email: newUser.email };
    return {
      email: newUser.email,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
