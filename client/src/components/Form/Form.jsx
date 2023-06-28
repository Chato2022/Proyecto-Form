import styles from "./Form.module.css";
import { useLocation } from "react-router-dom";

const Form = () => {
    //obteniendo el estado con las propiedades del usuario
    const location = useLocation();
    const user = location.state || {};
    return(
        <div className={styles.container}>
            <h1>Welcome user: {user.name} {user.lastname}</h1>
        </div>
    )
}

export default Form;