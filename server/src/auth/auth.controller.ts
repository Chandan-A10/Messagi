import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from 'src/schema/users.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() user: User) {
    return this.authService.signIn(user);
  }
  @Post('register')
  signUp(@Body() user: User) {
    return this.authService.signUp(user);
  }
}
