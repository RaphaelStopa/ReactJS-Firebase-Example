import {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext'

function Login() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const {login, currentUser} = useAuth();
    let navigate = useNavigate();

    
    async function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        await login(email, password)
        navigate("/main")
        setLoading(false)
    }


    function reset(e) {
        setEmail('')
        setPassword('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <strong><div>Login</div></strong>
            <div>
                <label>Senha:</label>
                <input placeholder='Senha' name="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input placeholder='Email' name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                    </div>
                    <div>
                    <button disabled={loading} type='submit'>Logar</button>
                    <button onClick={e => reset(e.target.value)}>Cancelar</button>
                    </div>
                    <div>Não tem uma conta?</div>
                    <Link to={'/Register'}>Crie uma conta</Link>
        </form>
    );
  }

  export default Login;

