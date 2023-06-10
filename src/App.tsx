import { Routes, Route } from 'react-router';

/*Views*/
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Edit from './components/Edit';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create" element={<Edit />} />
    </Routes>
    </>
  );
}

export default App;
