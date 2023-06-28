const { User } = require("../db");

//Obtener todos los usuarios de la DB
const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};
//Obtener al usuario especificado por id de la DB
const getUserById = async (uuid) => {
    const user = await User.findByPk(uuid);
    return user;
};
//Crear un nuevo usuario en la DB
const createUser = async (user_id, user, name, lastname, email, password, role, location_code) => {
    const newUser = await User.create({user_id,user,name,lastname,email,password,role,location_code});
    return newUser;
};
//Validar un usuario
const validateUser = async (user,password) => {
    const validatedUser = await User.findOne({
        where:{
            user: user,
            password: password
        }
    });
    if (validatedUser) {
        return {
            access:"Usuario validado",
            user: validatedUser
        };
    }else{
        return{access:"Usuario incorrecto"}
    }
} 

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    validateUser
}