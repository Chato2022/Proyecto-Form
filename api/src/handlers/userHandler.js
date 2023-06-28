const { getAllUsers, getUserById, createUser, validateUser} = require("../controllers/userController");

//RUTA: solicitar todos los usuarios
const getUsersHandler = async (req,res) => {
    try {
        const users = await getAllUsers();
        if (users.length===0) {
            throw Error("No hay usuarios")
        }
        //si todo sale bien se obtiene en el response todos los usuarios
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
    
}; 
//RUTA: solicitar un usuario pasando un uuid
const getUserByIdHandler = async (req,res) => {
    try {
        const {uuid} = req.params;
        const user = await getUserById(uuid);
        if (!user) {
            throw Error(`No existe el usuario con uuid: ${uuid}` )
        }
        //si todo sale bien se obtiene al usuario solicitado
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};
//RUTA: Creación de un nuevo usuario
const createUserHandler = async (req,res) => {
    try{
        const { user_id, user, name, lastname, email, password, role, location_code } = req.body;
        if (!user_id || !user|| !name || !lastname || !email || !password || !role || !location_code) {
            throw Error("No se pasaron todos los campos necesarios");
        }else{
            const newUser = await createUser(user_id, user, name, lastname, email, password, role, location_code);
            if(!newUser){
                throw Error("No se puedo crear el usuario");
            }
            //si todo sale bien se crea un nuevo usuario
            res.status(201).json(newUser);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}
//RUTA: Validación de un usuario
const validateUserHandler = async (req,res) => {
    try {
        const {user, password} = req.body;
        if (!user || !password){
            throw Error("No se llenaron todos los campos");
        }else{
            const validatedUser = await validateUser(user,password);
            if (validatedUser.access !== "Usuario validado") {
                throw Error("Acceso denegado");
            }
            res.status(200).json(validatedUser);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getUsersHandler,
    getUserByIdHandler,
    createUserHandler,
    validateUserHandler
}