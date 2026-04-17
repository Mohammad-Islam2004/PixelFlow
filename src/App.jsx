import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage'
import { ToastContainer } from 'react-toastify'
const App = () => {
  return (
    <div className='text-white bg-blue-950'>
      
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/collection' element={<CollectionPage/>} />
    </Routes>

      <ToastContainer/>

    </div>
  )
}

export default App