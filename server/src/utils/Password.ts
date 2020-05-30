import bcrypt from 'bcryptjs';

export class Password {
    public static async hash(password: string): Promise<string> {
        if (password.length < 8) {
            throw new Error('Must be greater than 8 characters.');
        }

        return bcrypt.hash(password, 10);
    }

    public static async verify(providedPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(providedPassword, hashedPassword);
    }
}