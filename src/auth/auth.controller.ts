import { Body, Controller, Post } from "@nestjs/common";
import { UserDto } from "../dto/user.dto";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private _authService: AuthService) {
  }

  @Post("/signin")
  public signIn(@Body() userDto: UserDto): { accessToken: string } {
    return this._authService.signIn(userDto);
  }
}
