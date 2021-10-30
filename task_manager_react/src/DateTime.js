//Function responsible for whole date component


function DateTime(){
 let date = new Date();
 let year = date.getFullYear();
 let month = date.getMonth();
 let day = date.getDay();
 let hour = date.getHours();
 let minute = date.getMinutes();
 let second = date.getSeconds();
 let dd = date.toLocaleDateString("en", "long");


 return(
     <section class = "dateComponent">
        <div class = "time">{hour} {minute} {second}</div>
        <div class = "date">{dd}</div>
        
     </section>
 )
}

export default DateTime;