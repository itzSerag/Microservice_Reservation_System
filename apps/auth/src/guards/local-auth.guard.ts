import { AuthGuard } from "@nestjs/passport";

// this local corresponds to the name of the strategy which we pass to passport 
// <>
export class LocalAuthGuard extends AuthGuard('local') { }