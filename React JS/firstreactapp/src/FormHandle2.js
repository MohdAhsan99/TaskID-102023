import { useReducer, useState } from "react"

const initialState = {
    Emailid:"",
    Password:"",
    Gender:"",
    City:""

}
const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            return {...state, [action.fld]:action.value }
         case 'reset':
            return initialState
    }
}
<br/>
function HandleForm1()
{  const[emp, dispatch] = useReducer(reducer , initialState );
    const[flag,setflag]=useState(false)
    
    return(
        <div className="container">
            
            <form>
               
                Email-id : 
                <input type="email" name='email' value={emp.Emailid}
               onChange={(e)=>{dispatch({type:"update",fld:'Emailid',value:e.target.value})}}/>
                <br/>
                Password : 
                <input type="password" name='password' value={emp.Password} 
               onChange={(e)=>{dispatch({type:"update",fld:'Password',value:e.target.value})}}/>
                  <br/>
                 Gender : 
                 <select name='Gender' onChange={(e)=>{dispatch({type:"update",fld:'Gender',value:e.target.value})}}>
                 <option value={emp.Gender}>select one</option>
                 <option value='m'>Male</option>
                 <option value='f'>Female</option>
               </select>
                      <br/>
                City : 
                <input type="text" name='city' value={emp.City} 
               onChange={(e)=>{dispatch({type:"update",fld:'City',value:e.target.value})}}/>
                <br/>
          <input type="checkbox" name='c1' checked={flag} onChange={(e)=>{setflag(e.target.checked);}}/> {flag.toString()}
          <br/>
            <input type="button" value="button" name='c1' onClick={()=>{if(flag==true){console.log(JSON.stringify(emp))}else{console.log("not clicked")}}}/> 
            </form>
          
           <h1  style={{ display: flag?'block':'none' }}>Welcome : { (JSON.stringify(emp))} </h1>
           
          
        </div>
    )
}
export default HandleForm1;