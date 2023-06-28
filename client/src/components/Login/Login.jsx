import styles from "./Login.module.css";
import { useState } from "react";


const Login = ({login}) => {

    const [userData, setUserData] = useState({
		user:"",
		password:""
	})

    //se ejecuta al escribir en los input y recibe lo que se escribe
	const handleChange = (event) => {
		setUserData({
			...userData,
			[event.target.name]: event.target.value,
		})
	}
    //envio del formulario
	const handleSubmit = async (event) => {
		event.preventDefault();
        if (userData.user !== "" && userData.password !== "") {
            const access = await login(userData);
            if (access === "access denied") {
                alert(access);
                //Reseteando todo el formulario al haberse equivocado
                setUserData({
                user: "",
                password: ""
                });
            }
        }else{
            alert("Debe llenar todos los campos");
        }
	}

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>LOGIN</h1>
            <form className="row g-3" onSubmit={handleSubmit}>
                {/* USUARIO */}
                <div className="col-12">
                    <label htmlFor="inputUser" className="form-label">Usuario</label>
                    <input type="text" className="form-control" id="inputUser" name="user" value={userData.user} autoComplete="off" placeholder="Ingrese su usuario..." onChange={handleChange}/>
                </div>
                {/* CONTRASEÑA */}
                <div className="col-12">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="inputPassword" name="password" value={userData.password} autoComplete="off" placeholder="Ingrese su contraseña..." onChange={handleChange}/>
                </div>
                {/* BOTON INGRESAR */}
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                        Ingresar
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;