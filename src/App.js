import "./App.css";
 import {Routes,Route} from 'react-router-dom'
 import Home from './Components/Home';
import Post from './Components/Post';
 
 
function App() {
 
   return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:id" element={<Post/>} />
        </Routes>
      

      

        
    </div>
  );
}

export default App;
