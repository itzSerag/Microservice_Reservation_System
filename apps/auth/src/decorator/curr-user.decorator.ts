import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UsersDocument } from "../users/models/users.schema";

// when we validate in local strategy we return the user
// so the user is returned in req in name of user 

const getCurrentUserByContext = (context: ExecutionContext): UsersDocument => {
    return context.switchToHttp().getRequest().user
}

export const CurrentUser = createParamDecorator(
    (_date: unknown, context: ExecutionContext) =>
        getCurrentUserByContext(context)
) 