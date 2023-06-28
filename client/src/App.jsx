import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Login from './components/Login/Login';
import Form from './components/Form/Form';

function App() {

  const navigate = useNavigate();
	const [access, setAccess] = useState(false);
  //No dejara ingresar a otra pagina hasta que el acceso este validado
  useEffect(() => {
		!access && navigate('/');
	}, [access]);
  //Se validara al usuario usando la API
  const login = async (userData) => {
    try {
      const validateUser = (await axios.post("http://localhost:3002/user/validate",userData)).data;
      if (validateUser.access === "Usuario validado") {
        const state = validateUser.user;
        setAccess(true);
        navigate("/user", { state })
      }
    } catch (error) {
      return "access denied"
    }
	}
  
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Login
        login={login}
        />}/>
        <Route path='/user' element={<Form/>}/>
      </Routes>
    </div>
  )
}

export default App
