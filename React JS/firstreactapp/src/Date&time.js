let DateTime=()=>{
    var cdate = new Date();
   
    return(
        <div>
            <p>Date:{cdate.getDate()}</p>
            <p>Time :{cdate.toLocaleString()} </p>

        </div>
    )
}
export default DateTime;