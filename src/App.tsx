import './App.css';
import { AuthProvider } from './contexts/AuthContext';
import RouteApp from './utils/RouteApp';


function App() {
  return (
    < AuthProvider>
    <RouteApp></RouteApp>
    </AuthProvider>
  );
}

export default App;

