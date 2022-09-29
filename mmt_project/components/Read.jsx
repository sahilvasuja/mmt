import { createClient } from "@supabase/supabase-js";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";
import { Style } from "util";
import Create from "../components/view";


 function Fetch(){
    const [data,setdata]=useState();
     
    useEffect(()=>{
        read();
    },[])
   
async function read(){
   const {data,error}=await supabase.from("post").select("*");
   setdata(data);
//    Arr.push(...data);
//     setArr(...Arr)
    // console.log(data);
}
return(
    <>
    <Create />
    
       
        {
       data ? (
    
         <div className="justify-center p-6 flex flex-col m-2">
          

         {data.map((ele)=>(
            <>
            <div className="flex flex-row">
            <div className="text-center  m-2 mx-96 text-cyan-800 border  border-black px-4 py-1 w-24 ">
           {ele.id} <br/>
           </div>
           <div className="text-center  m-2 mx-18 text-cyan-800 py-1 border border-black px-3 w-40 ">
           {ele.title} <br/>
           </div>
            </div>
          
            </>
           
                    ))}
         </div>
        
       ): "Loading.."
     }
     </>
 )
     }
        
           export default Fetch;