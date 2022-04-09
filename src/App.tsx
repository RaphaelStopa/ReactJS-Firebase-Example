import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import RouteApp from './utils/RouteApp';


// Ele quer rotas em um arquivo separadfxFlexOffset
// fiz a conta no firebase mais nao intregeu
// coloque um pouco de css
// header nao da auqi, tente colocar na arquivo de rota mesmo
// https://www.youtube.com/watch?v=jCY6DH8F4oc em 15 minutos

function App() {
  return (
    < AuthProvider>
    <RouteApp></RouteApp>
    </AuthProvider>
  );
}

export default App;

