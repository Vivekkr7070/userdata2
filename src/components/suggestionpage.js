import React from 'react'
import { useState } from 'react'
import "./css/suggestion.css"
import Navbar from './navbar'
import "./css/suggestionbox.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Suggestionpage(){
  const [textvalue, setTextvalue] = useState()

 const submitb=()=>{
  const count=textvalue.length;
           
  if(count<15){
    toast("Please give feedback in more than 15 characters ",{
      position :"top-center"        
  });
  }
  else if(count>100){
toast("plese give feedback in less than 100 characters",{
  position :"top-center"        
});
  }
else{
  toast("Thanks for your feedback",{
    position :"top-center"        
  });
}
 }

  return (
    <>
    <div className='navcss'>
         <Navbar />
    </div>
    <div className='suggestion'>    
      <div className="container">
        <textarea id="story" name="story"
          rows="12" cols="33" defaultValue={textvalue} onChange={(e) => setTextvalue(e.target.value)}>
          Please give your valuable suggestion
        </textarea>
      </div>
      <div className="imagecontainer">
        <label for="formFile" className="form-label">Please select image</label><br />
        <input className="imagecontainer" type="file" id="formFile" />
      </div>
      <div className="imageup">
        <button type="button" onClick={submitb} className="btnsubmit">Submit suggestion</button>
      </div>
      <ToastContainer />
    </div>
    </>
  )
}


