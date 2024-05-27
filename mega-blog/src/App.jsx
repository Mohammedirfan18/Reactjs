import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
function App() {
   const [loading,setLoading] = useState(true);
   const dispatch=useDispatch();

   useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData)
        {
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
    })
    .finally(()=>setLoading(false))
   },[])

  return !loading ? (
    <div className='min-h-screen bg-gray-400 flex flex-wrap content-between '>
      <div className='w-full-block'>
        <Header/>
    TODO:{/*Outlet*/}
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
