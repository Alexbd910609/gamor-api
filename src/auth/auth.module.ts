import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({ secret: "Y0urS3cr3tK3yF0rEncrypt10n&D3crypt" })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {
}
