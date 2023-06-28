const { Router } = require("express");
const { getUsersHandler, getUserByIdHandler, createUserHandler, validateUserHandler } = require("../handlers/userHandler")

const userRouter = Router();
//RUTAS USER
userRouter.get("/",getUsersHandler);

userRouter.get("/:uuid",getUserByIdHandler);

userRouter.post("/",createUserHandler);

userRouter.post("/validate",validateUserHandler);

module.exports = userRouter;