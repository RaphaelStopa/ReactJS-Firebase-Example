import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Register from '../components/Register/Register';
import Main from '../components/Main/Main';
import Login from '../components/Login/Login';
import { AuthProvider } from '../contexts/AuthContext';


const RouteApp = () => {
    return (
        <BrowserRouter>
        <AuthProvider>
            <Routes>
                <Route path="/main"  element= {<Main/>} ></Route>
                <Route path="/register"  element= {<Register/>} ></Route>
                <Route path="/" element= {<Login/>}></Route>
                </Routes>
                </AuthProvider>
        </BrowserRouter>
    )
}

export default RouteApp;

