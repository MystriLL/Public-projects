//Function responsible for whole date component

import React, {useState,useEffect} from 'react'

function DateTime(){

const [dateTime, setDateTime] = useState(new Date());

useEffect(()=>{
    const id = setInterval(()=> setDateTime(new Date()),1000);
    return () => clearInterval(id);
}, []);


const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
};

 let currentTime = dateTime.toLocaleTimeString();
 let currentDate = dateTime.toLocaleDateString("en",options);

 return(
     <section class = "dateComponent">
        <div class = "time">{currentTime}</div>
        <div class = "date">{currentDate}</div>
     </section>
 )
}

export default DateTime;