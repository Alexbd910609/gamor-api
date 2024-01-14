import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtPayload, User } from "./user.model";
import { UserDto } from "../dto/user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private _jwtService: JwtService) {
  }

  private _users: User[] = [
    {
      logo: {
        color: "#D84B20",
        char: "A"
      },
      nick: "admin",
      name: "Admin",
      email: "admin@admin.com",
      password: "QWRtaW4xMjM0NTYuKg=="
    },
    {
      logo: {
        color: "#308446",
        char: "U"
      },
      nick: "user",
      name: "User",
      email: "user@user.com",
      password: "VXNlcjEyMzQ1Ni4q"
    }
  ];

  public signIn(userDto: UserDto): { accessToken: string } {
    const { email, password } = userDto;
    const user: User = this._users.find((user: User): boolean => user.email === email);

    if (user && user.password === password) {
      const payload: JwtPayload = {
        logo: user.logo,
        nick: user.nick,
        email: user.email,
        name: user.name
      };

      const accessToken: string =  this._jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException("Please check your login credentials");
    }
  }
}
