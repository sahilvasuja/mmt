import { supabase } from "../utils/supabase";
import { useState,useEffect } from "react";
import { title } from "process";
// async function fetch(){
//   useEffect(()=>{
//     fetchdata();
//   },[]);
// }
 function Create () {
  const [result,setresult]=useState("");
  const [data,setdata]=useState("");
  
  async function handleSubmit(e){
    
    e.preventDefault();
    const {data,error}=await supabase.from("post").insert([{title: result }]).select("*");
    console.log(data,error);
   setdata(data);
  
}

  // 
// async function fetchdata(){
//   const {data,error}=await supabase.from("post").select("*");

//   setdata(data);
//   
//   if(error){
//     alert(error);
//   }
// }
  return (
       <>
      
  
      <form className="flex flex-col" action="" onSubmit={e=>handleSubmit(e)}>
        <input className="px-2 py-3 mx-auto border-1 mt-28 text-center w-96 bg-gray-200 text-gray-900" 
        type="text"
         value={result}
        
          onChange={e=>setresult(e.target.value)} />
        <button className="p-2 mt-5 text-4xl text-gray-700 border-solid border-2 w-36 text-center m-auto " type="submit">Submit</button>
      </form>
      {/* <div className="text-red-500 p-3 font-light text-6xl">index</div> */}
    </>
    
  )
  
 
  
  }
export default Create;






