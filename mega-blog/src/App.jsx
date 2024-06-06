import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import {login,logout} from './store/authSlice'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
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
    .catch((error)=>{
      console.log("Error fetching user data:", error);
    })
    .finally(()=>setLoading(false))
   },[])

  return !loading ? (
    <div className='min-h-screen bg-gray-400 flex flex-wrap content-between '>
      <div className='w-full-block'>
        <Header/>
   <Outlet/>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App
