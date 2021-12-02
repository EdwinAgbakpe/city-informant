import { Controller, Body, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { LoginUserDto } from './users/dto/login-user.dto';
import { CreateUserDto } from './users/dto/create-user.dto';
// import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}

  /**
   * Login as user
   * @param req request with user info
   * @returns jwt token
   */
  @Post('/auth/login')
  async login(@Body() user: LoginUserDto) {
    return this.authService.login(user);
  }

  /**
   * Register New User
   * @param req request with user info
   * @returns jwt token
   */
  @Post('/auth/register')
  async register(@Body() user: CreateUserDto) {
    return this.authService.registerUser(user);
  }
}
