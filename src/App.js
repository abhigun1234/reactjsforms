import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import Login from './Login';
import User from './User';
import Header from './Header';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import FormComp from './FormComp';

function App() {
  return (
    <div className="App">
      {/* <Registration></Registration> */}
      {/* <Login></Login> */}
     {/* <User></User> */}
     {/* <Registration></Registration> */}
     <BrowserRouter>
     <Header></Header>
     <Routes>
     <Route path="forms" element={<FormComp />} ></Route>
     <Route path="registration" element={<Registration></Registration>}></Route>

     </Routes>
     </BrowserRouter>
  
    </div>
  );
}

export default App;
