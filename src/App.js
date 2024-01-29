// import './App.css';
// import Home from "./pages/Home.js"
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path = "/" element ={<Home/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import React from 'react'
import Sidebar from './Components/Sidebar'

function App() {
  return (
    <div>
      <Sidebar />
    </div>
  )
}

export default App