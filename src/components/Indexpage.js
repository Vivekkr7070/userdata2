import React  from 'react'
import Navbar from './navbar';
import 'react-toastify/dist/ReactToastify.css';
import Userdetails from './userdetail';
import "./css/userdetails.css";

export default function Indexpage() {
    return (
        <>
        <div className='navcss'>
         <Navbar />
         </div>
            <div className="udcontainer">
               <Userdetails />
            </div>
        </>
    )
}
