import { useLocation } from "react-router-dom";
import MainLayout from "./layout/MainLayout"
import { useAppDispatch } from "./redux/hooks"
import { userSet } from "./redux/user/userSlice"
import { Toaster } from 'react-hot-toast';
import {useEffect} from 'react'

function App() {
  const dispatch = useAppDispatch()
const userStringify = localStorage.getItem('user')
if(userStringify){
  const user = JSON.parse(userStringify)
  dispatch(userSet(user))
}
const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
    <Toaster />
    <MainLayout/>
    </>
  )
}

export default App
