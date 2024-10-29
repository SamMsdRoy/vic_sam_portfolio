import { useState } from "react"

export default function ModalforResume(){
  const [pass,setPass]=useState('')
  const [hidden,setHidden]=useState(true)
  const [message,setMessage]=useState('Enter Password')


 const handleClick=()=>{
    if(pass=="2345"){
      setMessage('Successful')
      setPass('')
     return setHidden(false)
    }
    else{
      setPass('')
      setHidden(true)
     return setMessage("Please enter Correct Password")
    }
  }
  return(
  
    <div className="modal fade" id="hope" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content text-center">
        <div className="modal-header">
          <div className="modal-title">Resume Download</div>
          <button className="btn-close" data-bs-dismiss="modal" onClick={()=>{setHidden(true);
          return setMessage('')}}></button></div>
          <div className="modal-body text-center">
            <div className="container">{message}</div>
            <input type="text" value={pass} onChange={(e)=>setPass(e.target.value)} className="form-control m-1"/>
            <button className="btn btn-primary btn-sm mt-2" onClick={handleClick}>Enter</button>
            
            </div>
            <div className="modal-footer text-center text-success" style={{alignSelf:"center"}}>
             <a href={"../assets/Doc1new_doc1_resume.pdf"} className="btn btn-outline-success" hidden={hidden} download>Download</a>
            </div>
          
        </div>

      </div>
    </div>
  
  )
}