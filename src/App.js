import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Employee from "./component/Employee";
import Medical from "./component/Medical";
import Education from './component/Education';
import Consent from './component/Consent';
import Board from "./component/Board";
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
  <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Employee/>}></Route>
    <Route path='Medical' element={<Medical/>}></Route>
    <Route path='Education' element={<Education/>}></Route>
    <Route path='Consent' element={<Consent/>}></Route>
    <Route path='Board' element={<Board/>}></Route>
   </Routes>
   </BrowserRouter>
 </>

  );
}

export default App;
