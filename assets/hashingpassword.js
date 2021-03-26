import bcryptjs from 'bcryptjs';

export const hashPassword = (plainPassword) => {
    let salt = bcryptjs.genSaltSync(10);
    return bcryptjs.hashSync(plainPassword, salt);
};
