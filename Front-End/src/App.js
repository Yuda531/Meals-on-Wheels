import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Donor from './Pages/Donor';

function App() {
  return (

    <>

    <Navbar />
    <Router>
      <Routes>
      <Route path='/donor' element={<Donor />} />
      </Routes>
    </Router>
    
    </>
   
  );
}

export default App;
