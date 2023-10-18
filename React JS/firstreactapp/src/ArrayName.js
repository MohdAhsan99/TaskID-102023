function ArrayProps(ps)
{
  
   return(
       <div>
           <h1> Welcome </h1>
           <ul>{
               
           ps.name.map(v => {return <li key={v}> {v} </li>})
           }
           </ul>
       </div>
   )
}
let ListedName = (ps) => 
{
    return (
        <div>
        <h1> Welcome </h1>
        <ul>
            {
                ps.names.map(v => {return <li key={v}>{v}</li>})
            }
        </ul>
   
        </div>
    )
}
ListedName.defaultProps = {
    names:["Abrar","Ahsan"]
}


 
let EmpProps=(ps) =>
{
   return(
       <div>
           <table border={1}>
            <tr>
                <td>Empid</td>
                <td>EName</td>
                <td>Salary</td>
            </tr>
            {
            ps.data.map(v => {return <tr key={v.id}> <td>{v.id}</td> <td>{v.nm}</td> <td>{v.sal}</td> </tr>})
              }
           
           </table>
       </div>
   )
}

export { ArrayProps , ListedName,EmpProps }