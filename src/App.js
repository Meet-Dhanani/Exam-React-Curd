
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Curd from './component/Curd';
// import Curd from './Component/Curd';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Curd />}></Route>
    </Routes>
  )
};

export default App;