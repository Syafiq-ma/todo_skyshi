import './App.css';
import Dashboard from './Pages/Dashboard';
import {Route, Routes} from 'react-router-dom'
import Activity from './Pages/Activity';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/:id' element={<Activity/>}/>
      </Routes>
    </div>
  );
}

export default App;
