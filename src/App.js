
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home';
 import Login from './components/Login'; 
import Test from './components/Test';
 




function App() {
  return (
    <Router>
    <div className="App">
      <Test/>
      <div className='App-link'>
     <Link to='/Home' >Home</Link>
     <Link to='/Login'>Login</Link>
     </div>
     <div>
       <Route path='/Home' render={(props)=>{
         return <Home userName='chandan' {...props}/>
       }}/>
      /*<Route path='/Login' component={Login}/>  
     </div>
    </div>
    </Router>
  );
}

export default App;
