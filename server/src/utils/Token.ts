import jwt from 'jsonwebtoken';
import {ContextParameters} from "graphql-yoga/dist/types";
import {UserRole} from "../generated/prisma";

interface DecodedToken {
    [key: string]: string | undefined | null
    userId: string | undefined | null,
    role: UserRole | undefined| null
}

export class Token {
    public static getContent = (request: ContextParameters, requireAuth: Boolean = true): null | DecodedToken => {
        const cookieJWT = request.request ? request.request.cookies.jid : request.connection.context.authorization;

        if (cookieJWT) {
            const token = cookieJWT.replace("Bearer ", "");

            const {userId, role} = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

            return {userId, role};
        }

        if (requireAuth) {
            throw new Error('Unauthorized');
        }

        return null;
    };

    public static generate = ({userId, role}: {userId: string, role: UserRole}): string => {
        return jwt.sign({userId, role}, process.env.JWT_SECRET!, {'expiresIn': '7 days'});
    }
}