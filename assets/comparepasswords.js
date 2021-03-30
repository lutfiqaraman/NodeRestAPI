import bcryptjs from 'bcryptjs';

export const comparePasswords = (password1, password2) => {
    return bcryptjs.compare(password1, password2);
}
