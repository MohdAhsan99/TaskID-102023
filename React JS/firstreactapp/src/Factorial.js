function FactProps(ps)
{
   var n=ps.num;
   var fact=1;
   var i;
   for(i=1;i<=n;i++)
   {
       fact=fact*i;
   }
   return(
       <div>
           <h1>Factorial of {n} is {fact}</h1>
       </div>
   )
}
export default FactProps;