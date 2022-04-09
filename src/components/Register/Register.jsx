import {useState} from 'react';
import {Link} from "react-router-dom";
import {useAuth} from '../../contexts/AuthContext'
import {ref, set, get, update, remove, child} from "firebase/database"
import StartFireBase from '../../utils/database';

function Register() {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[confirmPassword, setConfirmPassword] = useState('');
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[date, setDate] = useState('');
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const {signup, currentUser} = useAuth();
    const[db, setDB] = useState(StartFireBase());


    async function handleSubmit(e){
        e.preventDefault()

        if(password !== confirmPassword) {
            alert('Senha não bate')
            return setError('Senha não bate')
        }

        if(password.length < 6) {
            alert('Password precisa de mais caracteres')
            return setError('Password precisa de mais caracteres')
        }
        setError("")
        setLoading(true)

        var uid;

        await signup(email, password).then(function (userCreds) {
            uid = userCreds.user.uid});

        set(ref(db, 'user/'+ uid),
            {
                FirstName: firstName,
                LastName: lastName,
                DataNasci: date
            })
            .then(()=>{alert('Contra criada.')})
            .catch((error)=>{alert("Erro: " + error)});

        setLoading(false)
    }


    function reset(e) {
        setEmail('')
        setPassword('')
        setConfirmPassword('')
        setFirstName('')
        setLastName('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <strong><div>Cadrastar</div></strong>
            <div>
                <label>Senha:</label>
                <input placeholder='Senha' name="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
            </div>
            <div>
                <label>Confirme senha:</label>
                <input placeholder='Confirme senha' name="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required></input>
            </div>
            <div>
                <label>Email:</label>
                <input placeholder='Email' name="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
            </div>
            <div>
                <label>Primeiro nome:</label>
                <input placeholder='Primeiro nome' name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} required></input>
            </div>
            <div>
                <label>Sobrenome:</label>
                <input placeholder='Sobrenome' name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} required></input>
            </div>
            <div>
                <label>Data de nascimento:</label>
                <input type="date"  name="DataDeNascimento" value={date} onChange={e => setDate(e.target.value)} required></input>
            </div>
            <div><button disabled={loading} type='submit'>Cadrastar</button>
                <button onClick={e => reset(e.target.value)}>Cancelar</button>
            </div>
            <div>Já tem uma conta?</div>
            <Link to={'/'}>Acesse</Link>
        </form>
    );

}

export default Register;

