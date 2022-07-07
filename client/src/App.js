import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import SignInModal from './components/SignInModal';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

function App() {
  return (
    <div className="App">
     <Home />
     <SignInModal
        show={false} 
        />
    </div>
  );
}

export default App;
