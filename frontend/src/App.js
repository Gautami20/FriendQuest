import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import Main from './pages/Main/Main'

function App() {
  return (
    <>
      <Router>

        <Navbar/>
        <Routes>

          <Route path='/' element={<Main />} />

        </Routes>
        <Footer/>

      </Router>
    </>
  );
}

export default App;

// $raspberry - rose: #b8336aff;
// $black: #060506ff;
// $sunset: #f2d0a4ff;
// $tickle - me - pink: #E38DA6ff;
// $white: #FFFFFFff;