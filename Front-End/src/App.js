import './App.css';
import Navbar from './component/Navbar';
import './css/style.css'
import Partner from './pages/Partner';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
     <Router>
       <Routes>
         
         <Route path="/" element={<Partner />} />
        
       </Routes>
     </Router>
    
    </>
  );
}

export default App;
