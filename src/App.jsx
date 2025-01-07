
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Action from './Pages/Action'
import Upcoming from './Pages/Upcoming'


const App = () => {

  
  
  

  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/details' element={<Detail/>}/>
      <Route path='/Action' element={<Action/>}/>
      <Route path='/up' element={<Upcoming/>}/>
    </Routes>
   
  )
}

export default App