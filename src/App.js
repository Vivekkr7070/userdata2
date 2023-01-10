import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/loginpage';
import Indexpage from './components/Indexpage';
import Suggestionpage from './components/suggestionpage';
import Protected from './components/Protected';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
    <ProSidebarProvider>
     <BrowserRouter>
     <Routes>
     <Route exact path="/" element={ <Loginpage /> } />
     <Route exact path="/indexpage" element={ <Protected Component={Indexpage}/> } /> 
     <Route exact path="/suggestion" element={ <Protected Component={Suggestionpage}/> } />
     <Route exact path="/protected" element={<Protected  />} />
     <Route exact path="/Navbar" element={ <Protected Component={Navbar}/> } />
      </Routes>
      </BrowserRouter>
      </ProSidebarProvider>
    </div>
  );
}

export default App;
