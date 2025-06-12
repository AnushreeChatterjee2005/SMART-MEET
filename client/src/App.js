import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path = '/login' element={<LoginProtector><Login /></LoginProtector>  } />
        <Route path='/register' element={<LoginProtector><Register /></LoginProtector>} />
        
        {/* <Route path="/myMeets" element={ <RouteProtecter> <MyMeets/> </RouteProtecter>} /> */}
      </Routes>
    </div>
  );
}

export default App;

