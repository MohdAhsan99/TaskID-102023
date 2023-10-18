import {useReducer, useState} from "react";

 
const initialState = 
    {
    empid:'',
    comm:'',
   
   }

const reducer = (state, action) => 
{
    switch(action.type) 
    {
         case 'update':
            return {...state, [action.fld]:action.value }
         case 'reset':
            return initialState
    }

}
let UpdateForm= () => 
{

    const[emp, dispatch] = useReducer(reducer , initialState );
    const [msg,setMsg] = useState("......")

    const submitData = (ev) => {
        ev.preventDefault()
        const reqOptions = {
            method:'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                empid: emp.empid,
                comm: emp.comm,
                
               

            })
        }

        fetch("http://localhost:9000/insertForm",reqOptions)
        .then(res => res.text())
        .then(data => setMsg(data) )


    }


    return (
        <div>
            <h1> Emp Form </h1>
            <form>
                Enter Emp id :
                <input type="text" name="empid" value={emp.empid} 
                 onChange={(e)=>{dispatch({type:"update",fld:'empid',value:e.target.value})}} />
                <br/>
               
                Enter Commisson :
                <input type="number" name="comm" value={emp.comm} 
                 onChange={(e)=>{dispatch({type:'update',fld:'comm',value:e.target.value})}} />
                <br/>
                <input type="submit" value="Submit"
                    onClick={(e)=>{ submitData(e) }} />
                
                <input type="button" value="Clear" 
                  onClick={()=>{dispatch({type:'reset'})}} />
            </form>
            {/*{JSON.stringify(emp)} */}
            <p> {msg} </p>
        </div>
    )
}

export default UpdateForm;