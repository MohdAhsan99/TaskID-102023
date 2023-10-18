import { useReducer, useState } from "react"

const initialState = {
    uid:"",
}
const reducer = (state, action) => {
    switch(action.type) {
         case 'update':
            return {...state, [action.fld]:action.value }
         case 'reset':
            return initialState
    }

}
function HandleForm()
{  const[uid, dispatch] = useReducer(reducer , initialState );
    const[flag,setflag]=useState(false)
    
    return(
        <div>
            <form>
                Enter Uid : 
                <input type="text" name='uid' value={uid.uid} onFocus={()=>{setflag(false)}}
               onChange={(e)=>{dispatch({type:"update",fld:'uid',value:e.target.value})}}/>

<input type="button" value="button" name='c1' onClick={(e)=>{setflag(true);}}/> 
            </form>
           <h1  style={{ display: flag?'block':'none' }}>Welcome : {(uid.uid)} </h1>
        </div>
    )
}
export default HandleForm;