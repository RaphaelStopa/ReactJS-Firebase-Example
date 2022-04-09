import {useAuth} from '../../contexts/AuthContext'
import {ref, set, get, update, remove, child} from "firebase/database"
import {useEffect, useState} from 'react';
import StartFireBase from '../../utils/database';

function Main() {
    const[db, setDB] = useState(StartFireBase());
    const {currentUser} = useAuth()
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[date, setDate] = useState('');

       useEffect(() => {
           
        async function getUser(){
            let user = (await get(child(ref(db), 'user/'+ currentUser.uid))).val()
            setFirstName(user.FirstName)
            setLastName(user.LastName)
            setDate(user.DataNasci)
        }
            getUser()
      }, [])


    return(
        <div>
            <div>
              <strong><div>Você logou!</div></strong>
              <div>Nome: {firstName + " " + lastName}</div>
              <div>Email: {currentUser.email}</div>
              <div>Data de nascimento: {date}</div>
              </div>
        </div>
    );
}

export default Main;
